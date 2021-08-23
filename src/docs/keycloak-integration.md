---
title: "Keycloak Integration Guide"
---

Hawtio's Keycloak integration is provided through [hawtio-oauth](https://github.com/hawtio/hawtio-oauth).

Those steps assume that you want your Hawtio console to be secured by [Keycloak](https://www.keycloak.org). Integration consists of 2 main steps:

1. Prepare Keycloak server
2. Deploy Hawtio to your favourite server (Spring Boot, WildFly, Karaf, Jetty, Tomcat, Red Hat Fuse, ...) and configure it to use Keycloak for authentication

## Table of contents

- [Table of contents](#table-of-contents)
- [Prepare Keycloak server](#prepare-keycloak-server)
- [Spring Boot](#spring-boot)
- [Apache Karaf or Red Hat Fuse](#apache-karaf-or-red-hat-fuse)
- [WildFly or JBoss EAP](#wildfly-or-jboss-eap)
- [Jetty](#jetty)
- [Tomcat](#tomcat)

## Prepare Keycloak server

Install and run Keycloak server. The easiest way is to use [Docker image](https://hub.docker.com/r/jboss/keycloak/):

```bash
docker run -d -p 18080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin --name keycloak jboss/keycloak
```

Here we use port number `18080` for Keycloak server to avoid conflict with the default port number of most application servers.

Import [hawtio-demo-realm.json](https://github.com/hawtio/hawtio-oauth/blob/master/test-plugins/hawtio-demo-realm.json) into your Keycloak. To do that, go to the Keycloak admin console (`http://localhost:18080/auth/admin/`) and select "Add realm" and then select the JSON file. It creates `hawtio-demo` realm.

`hawtio-demo` realm has `hawtio-client` application installed as public client. There are a couple of realm roles like `admin` and `viewer`. Names of these roles are the same as default Hawtio roles, which are allowed to login into Hawtio admin console and to JMX.

There are also 3 users:

- `admin` with password `admin` and role `admin`, who is allowed to login into Hawtio
- `viewer` with password `viewer` and role `viewer`, who is allowed to login into Hawtio
- `jdoe` with password `password` and no role assigned, who is not allowed to login into Hawtio

## Spring Boot

Firstly, apply [the required configuration](/docs/get-started/#running-a-spring-boot-app) for attaching Hawtio to a Spring Boot app.

Next, add the following dependency to `pom.xml` (replace `x.y.z` with the latest Hawtio release version):

```xml
<dependency>
  <groupId>io.hawt</groupId>
  <artifactId>hawtio-springboot-keycloak</artifactId>
  <version>x.y.z</version>
</dependency>
```

Then add the following lines in `application.properties` (which configures the server-side Keycloak adapter):

```bash
# Keycloak config
keycloak.realm=hawtio-demo
keycloak.resource=hawtio-client
keycloak.auth-server-url=http://localhost:18080/auth
keycloak.ssl-required=external
keycloak.public-client=true
keycloak.principal-attribute=preferred_username
```

Finally create `keycloak-hawtio.json` under `src/main/resources` in the Spring Boot project (which serves as the client-side Hawtio JS configuration):

```json
{
  "realm": "hawtio-demo",
  "clientId": "hawtio-client",
  "url": "http://localhost:18080/auth",
  "ssl-required": "external",
  "public-client": true,
  "jaas": false
}
```

Build and run the project and it will be integrated with Keycloak. See [springboot-keycloak example](https://github.com/hawtio/hawtio/tree/master/examples/springboot-keycloak) for a working example.

## Apache Karaf or Red Hat Fuse

Assume `$KARAF_HOME` is the root directory of your Karaf/Fuse installation.

Run Karaf/Fuse:

```bash
cd $KARAF_HOME/bin
./karaf
```

Replace `./karaf` with `./fuse` if you are on Red Hat Fuse.

Install Hawtio (replace `x.y.z` with the latest Hawtio release version):

```bash
feature:add-repo hawtio x.y.z
feature:install hawtio
```

Install [pax-keycloak](https://github.com/ops4j/org.ops4j.pax.keycloak):

```bash
feature:add-repo pax-keycloak
feature:install pax-keycloak
```

This automatically generates `keycloak-hawtio.json`, `keycloak-bearer.json`, and `keycloak-direct-access.json` files under `$KARAF_HOME/etc/`. It also updates `$KARAF_HOME/etc/system.properties` with the following system properties:

```bash
# Hawtio / Keycloak integration
hawtio.keycloakEnabled = true
hawtio.roles = admin,manager,viewer
hawtio.realm = karaf
hawtio.keycloakClientConfig = file://${karaf.etc}/keycloak-hawtio.json
hawtio.rolePrincipalClasses=org.keycloak.adapters.jaas.RolePrincipal,org.apache.karaf.jaas.boot.principal.RolePrincipal
```

Replace them with `keycloak-hawtio.json`, `keycloak-bearer.json`, and `keycloak-direct-access.json` in [this example](https://github.com/hawtio/hawtio/tree/master/examples/keycloak-integration). File `keycloak-bearer.json` is currently used for adapters on server (JAAS Login module) side. File `keycloak-hawtio.json` is used on client (Hawtio JS application) side. File `keycloak-direct-access.json` is not used but the realm name needs to be updated.

```bash
cp examples/keycloak-integration/keycloak-hawtio.json $KARAF_HOME/etc/
cp examples/keycloak-integration/keycloak-bearer.json $KARAF_HOME/etc/
cp examples/keycloak-integration/keycloak-direct-access.json $KARAF_HOME/etc/
```

Restart Karaf/Fuse.

Go to `https://localhost:8181/hawtio` and login to Keycloak as `admin` or `viewer` to see Hawtio admin console. If you login as `jdoe`, you should receive "forbidden" error in Hawtio.

## WildFly or JBoss EAP

Assume `$JBOSS_HOME` is the root directory of your WildFly/JBoss EAP installation and you deployed Hawtio WAR to it as described in [Hawtio Get Started](/docs/get-started).

Install Keycloak adapter subsystem to your WildFly as described on the [Keycloak documentation](https://www.keycloak.org/docs/latest/securing_apps/index.html#_jboss_adapter).

Download and copy `keycloak-hawtio.json` and `keycloak-bearer.json` from [this example](https://github.com/hawtio/hawtio/tree/master/examples/keycloak-integration) into WildFly. File `keycloak-bearer.json` is currently used for adapters on server (JAAS Login module) side. File `keycloak-hawtio.json` is used on client (Hawtio JS application) side.

```bash
cp examples/keycloak-integration/keycloak-hawtio.json $JBOSS_HOME/standalone/configuration/
cp examples/keycloak-integration/keycloak-bearer.json $JBOSS_HOME/standalone/configuration/
```

In `$JBOSS_HOME/standalone/configuration/standalone.xml` configure system properties like this:

```xml
<extensions>
  ...
</extensions>

<system-properties>
  <property name="hawtio.authenticationEnabled" value="true" />
  <property name="hawtio.realm" value="hawtio" />
  <property name="hawtio.roles" value="admin,manager,viewer" />
  <property name="hawtio.rolePrincipalClasses" value="org.keycloak.adapters.jaas.RolePrincipal" />
  <property name="hawtio.keycloakEnabled" value="true" />
  <property name="hawtio.keycloakClientConfig" value="${jboss.server.config.dir}/keycloak-hawtio.json" />
  <property name="hawtio.keycloakServerConfig" value="${jboss.server.config.dir}/keycloak-bearer.json" />
</system-properties>
```

Also add `hawtio` realm to this file in `<security-domains>` section:

```xml
<security-domain name="hawtio" cache-type="default">
  <authentication>
    <login-module code="org.keycloak.adapters.jaas.BearerTokenLoginModule" flag="required">
      <module-option name="keycloak-config-file" value="${hawtio.keycloakServerConfig}"/>
    </login-module>
  </authentication>
</security-domain>
```

Add the `<secure-deployment>` section to the `keycloak` subsystem in `$JBOSS_HOME/standalone/configuration/standalone.xml`. It should ensure that Hawtio WAR is able to find the JAAS login modules.

```xml
<subsystem xmlns="urn:jboss:domain:keycloak:1.1">
  <secure-deployment name="hawtio.war">
    <resource>does-not-matter</resource>
    <auth-server-url>does-not-matter</auth-server-url>
  </secure-deployment>
</subsystem>
```

Run WildFly on port `8080` and go to `http://localhost:8080/hawtio`. Users are again `admin` and `viewer` with access and `jdoe` without access.

## Jetty

Assume `$JETTY_HOME` is the root directory of your Jetty installation and you deployed Hawtio WAR to Jetty as described in [Hawtio Get Started](/docs/get-started).

Install Keycloak Jetty adapter into your Jetty server as described on the [Keycloak documentation](https://www.keycloak.org/docs/latest/securing_apps/index.html#_jetty9_adapter).

Download and copy `keycloak-hawtio.json` and `keycloak-bearer.json` into Jetty. File `keycloak-bearer.json` is currently used for adapters on server (JAAS Login module) side. File `keycloak-hawtio.json` is used on client (Hawtio JS application) side.

```bash
cp examples/keycloak-integration/keycloak-hawtio.json $JETTY_HOME/etc/
cp examples/keycloak-integration/keycloak-bearer.json $JETTY_HOME/etc/
```

Create file `$JETTY_HOME/etc/login.conf` with the content like this:

```bash
hawtio {
    org.keycloak.adapters.jaas.BearerTokenLoginModule required
        keycloak-config-file="${hawtio.keycloakServerConfig}";
};
```

Export `JETTY_HOME` in your terminal. For example:

```bash
export JETTY_HOME=/mydir/jetty-distribution-9.x.x
```

Export `JAVA_OPTIONS` and add all necessary system properties similarly like this:

```bash
export JAVA_OPTIONS="-Dhawtio.authenticationEnabled=true \
                     -Dhawtio.realm=hawtio \
                     -Dhawtio.keycloakEnabled=true \
                     -Dhawtio.roles=admin,manager,viewer \
                     -Dhawtio.rolePrincipalClasses=org.keycloak.adapters.jaas.RolePrincipal \
                     -Dhawtio.keycloakClientConfig=$JETTY_HOME/etc/keycloak-hawtio.json \
                     -Dhawtio.keycloakServerConfig=$JETTY_HOME/etc/keycloak-bearer.json \
                     -Djava.security.auth.login.config=$JETTY_HOME/etc/login.conf"
```

Run Jetty and go to `http://localhost:8080/hawtio`. Users are again `admin` and `viewer` with access and `jdoe` without access.

## Tomcat

Instructions are quite similar to Jetty. You would need to setup JAAS realm and set the system properties. Just use Tomcat adapter instead of the Jetty one. Also you may need to add this system property (really empty value):

```bash
-Dhawtio.authenticationContainerDiscoveryClasses=
```

This is needed, so that Tomcat will use configured JAAS realm with `BearerTokenLoginModule` instead of `tomcat-users.xml` file, which Hawtio uses on Tomcat by default.
