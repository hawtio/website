---
title: "Get Started"
---

Hawtio consists of 2 parts: an AngularJS applicaton and a Java backend, which proxies the communication between the frontend and [Jolokia](https://jolokia.org/) endpoints. The frontend has access to all JMX attributes and operations available in Java applications running locally and remotely.

Ways to run it:
- [Running an executable JAR](#running-an-executable-jar)
- [Running a Spring Boot app](#running-a-spring-boot-app)
- [Deploying on a Servlet container](#deploying-on-a-servlet-container)
- [Deploying on an application server](#deploying-on-an-application-server)
- [Deploying on Apache Karaf](#deploying-on-apache-karaf)
    - [If you use an HTTP proxy](#if-you-use-an-http-proxy)
- [Using Hawtio embedded in a Java application](#using-hawtio-embedded-in-a-java-application)

The out of the box defaults try to do the right thing for most folks but if you want to configure things then please check out the [configuration guide](../configuration/).

## Running an executable JAR

You can startup Hawtio on your machine using the hawtio-app executable JAR.

<a class="btn btn-primary" href="https://repo1.maven.org/maven2/io/hawt/hawtio-app/3.0-M6/hawtio-app-3.0-M6.jar" target="_blank">Download hawtio-app.jar</a>

Once you have downloaded it, just run this from the command line:

    java -jar hawtio-app-x.y.z.jar

Note: If you launch Hawtio with Java 9+, add the specified modules to avoid errors on startup and allow attaching to other Java processes:

    java --add-modules jdk.attach,java.xml.bind -jar hawtio-app-x.y.z.jar

The console should show you which URL to open, which by default is `http://localhost:8080/hawtio`.

To set a different port number, run:

    java -jar hawtio-app-x.y.z.jar --port 8090

To see the full list of configuration options, run:

    java -jar hawtio-app-x.y.z.jar --help


## Running a Spring Boot app

Attaching the Hawtio console to your Spring Boot app is simple.

### Set up

1. Add `io.hawt:hawtio-springboot` to the dependencies in `pom.xml`:

        <dependency>
          <groupId>io.hawt</groupId>
          <artifactId>hawtio-springboot</artifactId>
          <version>x.y.z</version>
        </dependency>

2. Enable the Hawtio and Jolokia endpoints by adding the following line in `application.properties`:
    ```
     management.endpoints.web.exposure.include=hawtio,jolokia
     spring.jmx.enabled=true 
    ```

Now you should be able to run Hawtio in your Spring Boot app as follows:

    mvn spring-boot:run

Opening `http://localhost:8080/actuator/hawtio` should show the Hawtio console.

If you'd prefer to not have the `/actuator` base path, then you can customize the Spring Boot management base path with the `management.endpoints.web.base-path` property:

        management.endpoints.web.base-path=/

You can also customize the path to the Hawtio endpoint by setting the `management.endpoints.web.path-mapping.hawtio` property:

        management.endpoints.web.path-mapping.hawtio=hawtio/console

### Example

There is a working Spring Boot example that shows Hawtio monitoring a sample web application which exposes information about Apache Camel routes, metrics, etc.

<a class="btn btn-large btn-primary" href="https://github.com/hawtio/hawtio/tree/master/examples/springboot" target="_blank">Hawtio Spring Boot example</a>

A good MBean for real time values and charts is `java.lang/OperatingSystem`. Try looking at Camel routes. Notice that as you change selections in the tree the list of tabs available changes dynamically based on the content.


## Deploying on a Servlet container

If you use Tomcat or Jetty, you can deploy the Hawtio WAR file.

<a class="btn btn-primary" href="https://github.com/hawtio/hawtio/releases/latest" target="_blank">Download hawtio-default.war</a>

Please read the [configuration guide](../configuration/) to see how to configure the console, in particular security.


## Deploying on an application server

If you don't use the WildFly application server, use one of the options from the [Servlet container](#deploying-on-a-servlet-container) section to download Hawtio.

If you do use WildFly, download <a href="https://github.com/hawtio/hawtio/releases/latest" target="_blank">hawtio-wildfly.war</a>.

To enable security, you'll need to set up configuration like this:

    <extensions>
        ...
    </extensions>

    <system-properties>
        <property name="hawtio.authenticationEnabled" value="true" />
        <property name="hawtio.realm" value="jboss-web-policy" />
        <property name="hawtio.role" value="admin" />
    </system-properties>

If you experience problems with security, you'll need to disable security in Hawtio. For WildFly, you can set the hawtio.authenticationEnabled system property in standalone/configuration/standalone.xml:

    <extensions>
        ...
    </extensions>

    <system-properties>
        <property name="hawtio.authenticationEnabled" value="false" />
    </system-properties>


## Deploying on Apache Karaf

Hawtio provides the following features for Apache Karaf:

<div class="table-responsive">
<table class="table table-striped table-condensed table-hover">
  <thead>
  <tr>
    <th>Feature</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>hawtio-core</td>
    <td>Installs the core Hawtio war file with minimal extensions</td>
  </tr>
  <tr>
    <td>hawtio-rbac</td>
    <td>Installs the Hawtio RBAC enabler bundles</td>
  </tr>
  <tr>
    <td>hawtio-log</td>
    <td>Installs the Hawtio logging backend MBeans</td>
  </tr>
  <tr>
    <td>hawtio</td>
    <td>Installs the main Hawtio web console</td>
  </tr>
</table>
</div>

If you are using [Apache Karaf](https://karaf.apache.org/) 4.x:

    feature:repo-add hawtio <version>
    feature:install hawtio

This will install all the features listed above. The Hawtio console can then be viewed at `http://localhost:8181/hawtio`.

Karaf versions prior to 4.x are not supported.

### If you use an HTTP proxy

If you are behind an HTTP proxy, you'll need to enable HTTP proxy support in WildFly / Karaf to be able to download Hawtio from the central maven repository.

There are a few [articles about](https://mpashworth.wordpress.com/2012/09/27/installing-apache-karaf-features-behind-a-firewall/) [this](https://stackoverflow.com/questions/9922467/how-to-setup-a-proxy-for-apache-karaf) which may help. Here are the steps:

Edit the `etc/org.ops4j.pax.url.mvn.cfg` file and make sure the following line is uncommented:

    org.ops4j.pax.url.mvn.proxySupport=true

You may also want **org.ops4j.pax.url.mvn.settings** to point to your Maven `settings.xml` file. **NOTE** use / in the path, not \.

    org.ops4j.pax.url.mvn.settings=C:/Program Files/MyStuff/apache-maven-3.0.5/conf/settings.xml

WildFly / Karaf will then use your [Maven HTTP proxy settings](https://maven.apache.org/guides/mini/guide-proxies.html) from your `~/.m2/settings.xml` to connect to the maven repositories listed in `etc/org.ops4j.pax.url.mvn.cfg` to download artifacts.


## Using Hawtio embedded in a Java application

If you do not use a servlet container or application server and wish to embed Hawtio inside your Java application, try the following:

Add the following to your `pom.xml`:

    <dependency>
      <groupId>io.hawt</groupId>
      <artifactId>hawtio-embedded</artifactId>
      <version>${hawtio-version}</version>
     </dependency>

Then in your application run the following code:

    import io.hawt.embedded.Main;

    ...
    Main main = new Main();
    main.setWar("somePathOrDirectoryContainingHawtioWar");
    main.run();

If you wish to do anything fancy it should be easy to override the Main class to find the `hawtio-war.war` in whatever place you wish to locate it (such as your local maven repo or download it from some server etc).

Depending on the war you are loading, you may also need to turn off authentication before running the embedded hawtio so that it can be accessible in an unauthenticated environment:

    System.setProperty("hawtio.authenticationEnabled", "false");
