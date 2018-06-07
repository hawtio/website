---
title: "Configuration"
---

- [Configuring Security](#configuring-security)
    - [Default Security Settings for Karaf containers](#default-security-settings-for-karaf-containers)
    - [Default Security Settings for web containers](#default-security-settings-for-web-containers)
        - [Configuring or disabling security in web containers](#configuring-or-disabling-security-in-web-containers)
        - [Configuring security in Apache Tomcat](#configuring-security-in-apache-tomcat)
        - [Configuring security in Jetty](#configuring-security-in-jetty)
    - [Keycloak Integration](#keycloak-integration)
- [Configuration Properties](#configuration-properties)
- [Web Application configuration](#web-application-configuration)


## Configuring Security

Hawtio enables security out of the box depending on the container it is running within. There are two types of container:

- [Karaf (OSGi) containers](#default-security-settings-for-karaf-containers)
- [Web containers](#default-security-settings-for-web-containers)


### Default Security Settings for Karaf containers

By default the security in Hawtio uses these system properties when running in Apache Karaf containers (Karaf, ServiceMix, Red Hat Fuse) which you can override:

<div class="table-responsive">
<table class="table table-striped table-condensed table-hover">
  <thead>
  <tr>
    <th>Name</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      hawtio.authenticationEnabled
    </td>
    <td>
      true
    </td>
    <td>
      Whether or not security is enabled
    </td>
  </tr>
  <tr>
    <td>
      hawtio.realm
    </td>
    <td>
      karaf
    </td>
    <td>
      The security realm used to login
    </td>
  </tr>
  <tr>
    <td>
      hawtio.role or hawtio.roles
    </td>
    <td>
      admin,manager,viewer
    </td>
    <td>
      The user role or roles required to be able to login to the console. Multiple roles to allow can be separated by a comma. Set to <code>*</code> or an empty value to disable role checking when Hawtio authenticates a user.
    </td>
  </tr>
  <tr>
    <td>
      hawtio.rolePrincipalClasses
    </td>
    <td>
      org.apache.karaf.jaas.boot.principal.RolePrincipal,
      org.apache.karaf.jaas.modules.RolePrincipal,
      org.apache.karaf.jaas.boot.principal.GroupPrincipal
    </td>
    <td>
      Fully qualified principal class name(s). Multiple classes can be separated by a comma. Set to an empty value to disable role checking when Hawtio authenticates a user.
    </td>
  </tr>
  <tr>
    <td>
      hawtio.noCredentials401
    </td>
    <td>
      false
    </td>
    <td>
      Whether to return HTTP status 401 when authentication is enabled, but no credentials has been provided. Returning 401 will cause the browser popup window to prompt for credentials. By default this option is <code>false</code>, returning HTTP status 403 instead.
    </td>
  </tr>
  <tr>
    <td>
      hawtio.authenticationContainerDiscoveryClasses
    </td>
    <td>
      io.hawt.web.tomcat.TomcatAuthenticationContainerDiscovery
    </td>
    <td>
        List of used <code>AuthenticationContainerDiscovery</code> implementations separated by comma. By default there is just <code>TomcatAuthenticationContainerDiscovery</code>, which is used to authenticate users on Tomcat from <code>tomcat-users.xml</code> file. Feel free to remove it if you want to authenticate users on Tomcat from configured JAAS login module or feel free to add more classes of your own.
    </td>
  </tr>
  <tr>
    <td>
      hawtio.authenticationContainerTomcatDigestAlgorithm
    </td>
    <td>
      NONE
    </td>
    <td>
      When using the Tomcat <code>tomcat-users.xml</code> file, passwords can be hashed instead of plain text.  Use this to specify the digest algorithm; valid values are <code>NONE</code> <code>MD5</code> <code>SHA</code> <code>SHA-256</code> <code>SHA-384</code> <code>SHA-512</code>.
    </td>
  </tr>
  <tr>
    <td>
      hawtio.tomcatUserFileLocation
    </td>
    <td>
      conf/tomcat-users.xml
    </td>
    <td>
        Specify an alternative location for the <code>tomcat-users.xml</code> file. e.g. <code>-Dhawtio.tomcatUserFileLocation=/production/userlocation/</code>
     </td>
  </tr>
  </tbody>
</table>
</div>

Changing these values is often application server specific. Usually the easiest way to get Hawtio working in your container is to ensure you have a new user with the required role (by default its the `admin` role).


#### Example: Customize the allowed roles

Hawtio reads its values in form of system properties. To define them on Karaf:

    dev:system-property hawtio.roles my_organization_admin
    # restart Hawtio bundle
    restart io.hawt.hawtio-war

Now only users with the `my_organization_admin` role will be allowed to login in Hawtio.

To add the `my_organization_admin` role to the `admin` user on Karaf:

    jaas:manage --realm karaf
    jaas:roleadd admin my_organization_admin
    jaas:update


### Default Security Settings for web containers

For web containers, Hawtio uses the following system properties:

<div class="table-responsive">
<table class="table table-striped table-condensed table-hover">
  <thead>
  <tr>
    <th>Name</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      hawtio.authenticationEnabled
    </td>
    <td>
      false
    </td>
    <td>
      Whether or not security is enabled
    </td>
  </tr>
  <tr>
    <td>
      hawtio.realm
    </td>
    <td>
      *
    </td>
    <td>
      The security realm used to login
    </td>
  </tr>
  <tr>
    <td>
      hawtio.role or hawtio.roles
    </td>
    <td>
    </td>
    <td>
      The user role or roles required to be able to login to the console. Multiple roles to allow can be separated by a comma. Set to <code>*</code> or an empty value to disable role checking when Hawtio authenticates a user.
    </td>
  </tr>
  <tr>
    <td>
      hawtio.rolePrincipalClasses
    </td>
    <td>
    </td>
    <td>
      Fully qualified principal class name(s). Multiple classes can be separated by a comma.
    </td>
  </tr>
  <tr>
    <td>
      hawtio.noCredentials401
    </td>
    <td>
      false
    </td>
    <td>
      Whether to return HTTP status 401 when authentication is enabled, but no credentials has been provided. Returning 401 will cause the browser popup window to prompt for credentials. By default this option is <code>false</code>, returning HTTP status 403 instead.
    </td>
  </tr>
  <tr>
    <td>
      hawtio.authenticationContainerDiscoveryClasses
    </td>
    <td>
      io.hawt.web.tomcat.TomcatAuthenticationContainerDiscovery
    </td>
    <td>
        List of used <code>AuthenticationContainerDiscovery</code> implementations separated by comma. By default there is just <code>TomcatAuthenticationContainerDiscovery</code>, which is used to authenticate users on Tomcat from <code>tomcat-users.xml</code> file. Feel free to remove it if you want to authenticate users on Tomcat from configured JAAS login module or feel free to add more classes of your own.
    </td>
  </tr>
  </tbody>
</table>
</div>


#### Configuring or disabling security in web containers

Set the following JVM system property to enable security:

    hawtio.authenticationEnabled=true

Or adjust the `web.xml` file and configure the `<env-entry>` element, accordingly.


#### Configuring security in Apache Tomcat

Set the following `CATALINA_OPTS` environment variable:

    export CATALINA_OPTS=-Dhawtio.authenticationEnabled=true

Then Hawtio will auto-detect that it is running in Apache Tomcat, and use its user data file (`conf/tomcat-users.xml`) for security.

For example to set up a new user named `scott` with password `tiger`, then edit the file `conf/tomcat-users.xml` to include:

    <user username="scott" password="tiger" roles="tomcat"/>

Then you can login to Hawtio with the username `scott` and password `tiger`.

If you only want users of a special role to be able to login Hawtio then you can set the role name in the `CATALINA_OPTS` environment variable as shown:

    export CATALINA_OPTS='-Dhawtio.authenticationEnabled=true -Dhawtio.role=manager'

Now the user must be in the `manager` role to be able to login, which we can set up in the `conf/tomcat-users.xml` file:

    <role rolename="manager"/>
    <user username="scott" password="tiger" roles="tomcat,manager"/>

Note that if you still want to use your own login modules instead of `conf/tomcat-users.xml` file, you can do it by remove `TomcatAuthenticationContainerDiscovery` from
system properties and point to `login.conf` file with your login modules configuration, something like:

    export CATALINA_OPTS='-Dhawtio.authenticationEnabled=true -Dhawtio.authenticationContainerDiscoveryClasses= -Dhawtio.realm=hawtio -Djava.security.auth.login.config=$CATALINA_BASE/conf/login.conf'

Then you can configure JAAS in file `TOMCAT_HOME/conf/login.conf` (example of file below in [Jetty section](#configuring-security-in-jetty)).


#### Configuring security in Jetty

To use security in Jetty you first have to set up some users with roles. To do that navigate to the `etc` folder of your Jetty installation and create the following file `etc/login.properties` and enter something like this:

    scott=tiger, user
    admin=CRYPT:adpexzg3FUZAk,admin,user

You have added two users. The first one named `scott` with the password `tiger`. He has the role `user` assigned to it. The second user `admin` with password `admin` which is obfuscated (see Jetty realms for possible encryption methods). This one has the `admin` and `user` role assigned.

Now create the second file in the same directory called `login.conf`. This is the login configuration file.

    hawtio {
      org.eclipse.jetty.jaas.spi.PropertyFileLoginModule required
      debug="true"
      file="${jetty.base}/etc/login.properties";
    };

Next you have to change the Hawtio configuration:

<div class="table-responsive">
<table class="table table-striped table-condensed table-hover">
  <thead>
  <tr>
    <th>Name</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      hawtio.authenticationEnabled
    </td>
    <td>
      true
    </td>
    <td>
      Whether or not security is enabled
    </td>
  </tr>
  <tr>
    <td>
      hawtio.realm
    </td>
    <td>
      hawtio
    </td>
    <td>
      The security realm used to login
    </td>
  </tr>
  <tr>
    <td>
      hawtio.role or hawtio.roles
    </td>
    <td>
    admin
    </td>
    <td>
      The user role required to be able to login to the console
    </td>
  </tr>
  <tr>
    <td>
      hawtio.rolePrincipalClasses
    </td>
    <td>
    </td>
    <td>
      Fully qualified principal class name(s). Multiple classes can be separated by a comma.
    </td>
  </tr>
  </tbody>
</table>
</div>

You have now enabled security for Hawtio. Only users with role `admin` are allowed.

At last enable the JAAS module in Jetty. This is done by adding the following line to the `start.ini` which is located in the `jetty.base` folder:

    # Enable security via JAAS, and configure it
    --module=jaas


### Keycloak Integration

Hawtio can now be integrated with [Keycloak](http://www.keycloak.org) for SSO authentication. See [Keycloak Integration Guide](../keycloak-integration/).

## Configuration Properties

The following table contains configuration settings for various Hawtio plugins.

<div class="table-responsive">
<table class="table table-striped table-condensed table-hover">
  <thead>
    <tr>
      <th>System Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>hawtio.sessionTimeout</td>
      <td>The maximum time interval, in seconds, that the servlet container will keep this session open between client accesses. If this option is not configured, then Hawtio uses the default session timeout of the servlet container.</td>
    </tr>
    <tr>
      <td>hawtio.activemq.verbose.tree</td>
      <td>Is default <code>false</code> to filter out verbose ActiveMQ details from the tree in Hawtio. This ensures situations when ActiveMQ will constantly add/remove same set of mbeans for a client connection because the client is not using pooled connections or using XA transactions without caching the consumer. In situations like these ActiveMQ keeps changing the mbeans which would cause the Hawtio web console to trigger an update in the tree, which makes using the web console more sluggish. Therefore this is filtered out by default. This option can be set to <code>true</code> to restore old behavior.</td>
    </tr>
    <tr>
      <td>hawtio.proxyWhitelist</td>
      <td>Comma-separated whitelist for target hosts that the <a href="https://github.com/hawtio/hawtio-jmx">hawtio-jmx</a> Connect plugin can connect to via <code>ProxyServlet</code> (default <code>localhost, 127.0.0.1</code>). All hosts that are not listed in this whitelist are denied to connect for security reasons. This option can be set to <code>*</code> to restore old behavior and whitelist all hosts. Prefixing an element of the list with <code>"r:"</code> allows to define a regexp (example: <code>localhost,r:myservers[0-9]+.mydomain.com</code>)</td>
    </tr>
  </tbody>
</table>
</div>


## Web Application configuration

If you are using a web container, the easiest way to change the web app configuration values is:

* Create your own WAR which depends on the `hawtio-default.war` like the [sample project's pom.xml](https://github.com/hawtio/hawtio/blob/master/sample/pom.xml#L17)
* Create your own [blueprint.properties](https://github.com/hawtio/hawtio/blob/master/sample/src/main/resources/blueprint.properties#L7) file that then can override whatever properties you require

### OSGi configuration

Simply update the blueprint configuration values in OSGi config admim as you would any OSGi blueprint bundles. On OSGi all the Hawtio Java modules use OSGi blueprint.

### Jolokia configuration

The Jolokia agent is deployed automatically with `io.hawt.web.JolokiaConfiguredAgentServlet` that extends Jolokia native `org.jolokia.http.AgentServlet` class, defined in `hawtio-war/WEB-INF/web.xml`.

To customize Jolokia Servlet configuration, according to the parameters that it supports and that are defined in the [Jolokia documentation](https://jolokia.org/reference/html/agents.html#agent-war-init-params), you have to pass them as Java System properties prefixed with `jolokia.`. E.g.:

    -Djolokia.policyLocation=file:///opt/hawtio/my-jolokia-access.xml

**NOTE** The parameter `restrictorClass` is already used in `hawtio-war/WEB-INF/web.xml` to implement role-based access control (RBAC) for Jolokia invocations. If you want to use your own Jolokia restrictor, make sure to extend `io.hawt.web.RBACRestrictor` to implement your own restrictor class. Otherwise, part of Hawtio's RBAC functions will be lost.

## More information

In the [articles](../articles/) collection you may find links to blog posts how to setup authentication with Hawtio in various other containers.
