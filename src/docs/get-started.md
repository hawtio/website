---
title: "Get Started"
---

Hawtio consists of 2 parts: an AngularJS applicaton and a Java backend, which proxies the communication between the frontend and [Jolokia](https://jolokia.org/) endpoints. The frontend has access to all JMX attributes and operations available in Java applications running locally and remotely.

Ways to run it:
* as a standalone [executable jar](#jar)
* deployed on a [Servlet container](#servlet)
* deployed on an [application server](#jee)
* deployed on an [OSGi container](#osgi)
* embedded [in a Java application](#embedded)

The out of the box defaults try to do the right thing for most folks but if you want to configure things then please check out the [configuration guide](../configuration/).

<a id="jar"></a>

## Running the executable jar

You can startup hawtio on your machine using the hawtio-app executable jar.

<a class="btn btn-large btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-app/2.0.2/hawtio-app-2.0.2.jar">Download hawtio-app-2.0.2.jar</a>

Once you have downloaded it, just run this from the command line:

    java -jar hawtio-app-2.0.2.jar

Note: If you launch hawt.io with Java 9, add the specified modules to avoid errors on startup and allow attaching to other Java processes:

    java --add-modules jdk.attach,java.xml.bind -jar hawtio-app-2.0.2.jar

The console should show you which URL to open, which by default is [http://localhost:8080/hawtio/](http://localhost:8080/hawtio/).

To set a different port number, run:

    java -jar hawtio-app-2.0.2.jar --port 8090

To see the full list of configuration options, run:

    java -jar hawtio-app-2.0.2.jar --help

<a id="servlet"></a>

## Deploying on a Servlet container

If you use Tomcat or Jetty, you can deploy the Hawtio WAR file.

<div class="row">
  <div class="col-md-4 text-center">
    <p>
      <a class="btn btn-primary" ref="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-default/2.0.2/hawtio-default-2.0.2.war">Download hawtio-default.war</a>
    </p>
    <p>
      A bare hawtio web application with minimal dependencies (online mode connecting to the internet for the Maven and Git plugin).
    </p>
  </div>
  <div class="col-md-4 text-center">
    <p>
      <a class="btn btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-default-offline/2.0.2/hawtio-default-offline-2.0.2.war">Download hawtio-default-offline.war</a>
    </p>
    <p>
      A bare <b>offline</b> hawtio web application with minimal dependencies in offline mode, where Maven and Git plugins are not enabled.
    </p>
  </div>
  <div class="col-md-4 text-center">
    <p>
      <a class="btn btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/sample/2.0.2/sample-2.0.2.war">Download sample.war</a>
    </p>
    <p>
      A hawtio web application which comes with some <a href="http://activemq.apache.org/">Apache ActiveMQ</a> and
      <a href="http://camel.apache.org/">Apache Camel</a> to play with.
    </p>
  </div>
</div>

Please read the [configuration guide](../configuration/) to see how to configure the console, in particular security.

If you don't see a Tomcat / Jetty tab for your container you may need to enable JMX.

<a name="jee"></a>

## Deploying on an application server

If you don't use the WildFly application server, use one of the options from the [Servlet container](#servlet) section to download Hawtio.

If you do use WildFly, download [hawtio-wildfly-2.0.2.war](https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-wildfly/2.0.2/hawtio-wildfly-2.0.2.war).

To enable security, you'll need to set up configuration like this:

    <extensions>
        ...
    </extensions>

    <system-properties>
        <property name="hawtio.authenticationEnabled" value="true" />
        <property name="hawtio.realm" value="jboss-web-policy" />
        <property name="hawtio.role" value="admin" />
    </system-properties>

You can follow the [steps outlined in this blog](http://www.christianposta.com/blog/?p=403) for a more comprehensive
look at enabling security in WildFly with Hawtio.

If you experience problems with security, you'll need to disable security in Hawtio. For WildFly, you can set the hawtio.authenticationEnabled system property in standalone/configuration/standalone.xml:

    <extensions>
        ...
    </extensions>

    <system-properties>
        <property name="hawtio.authenticationEnabled" value="false" />
    </system-properties>

For older JBoss AS releases (4,5 & 6) you can add the following configuration to your **jboss-as/server/default/deploy/properties-service.xml** file (which probably has the mbean definition already but commented out):

    <mbean code="org.jboss.varia.property.SystemPropertiesService"
     name="jboss:type=Service,name=SystemProperties">

      <attribute name="Properties">
            hawtio.authenticationEnabled=false
      </attribute>
    </mbean>

Learn how to [inject system properties into JBoss AS](http://www.mastertheboss.com/jboss-configuration/how-to-inject-system-properties-into-jboss).

## Using Apache Karaf

By default installing `hawtio` installs the Maven and Git plugin which uses online connection over the internet to work. You may want to install `hawtio-offline` instead which disables those plugins, and runs hawtio without any internet connectivity. When installing `hawtio-core` then those plugins are not installed and its also in offline mode.

If you are using [Apache Karaf](http://karaf.apache.org/) 2.x:

    features:chooseurl hawtio 2.0.2
    features:install hawtio

If you are using [Apache Karaf](http://karaf.apache.org/) 3.x:

    feature:repo-add hawtio 2.0.2
    feature:install hawtio-core

If you are using [Apache Karaf](http://karaf.apache.org/) 4.x:

    feature:repo-add hawtio 2.0.2
    feature:install hawtio

**NOTE** Karaf 2.x/3.x has an issue with the `hawtio-log` which does not work. And therefore you need to install `hawtio-core` instead of `hawtio`.

The hawtio console can then be viewed at [http://localhost:8181/hawtio/](http://localhost:8181/hawtio/).

### If you use a HTTP proxy

If you are behind a HTTP proxy, you'll need to enable HTTP proxy support in WildFly / Karaf to be able to download hawtio from the central maven repository.

There are a few [articles about](http://mpashworth.wordpress.com/2012/09/27/installing-apache-karaf-features-behind-a-firewall/) [this](http://stackoverflow.com/questions/9922467/how-to-setup-a-proxy-for-apache-karaf) which may help. Here are the steps:

Edit the **etc/org.ops4j.pax.url.mvn.cfg** file and make sure the following line is uncommented:

    org.ops4j.pax.url.mvn.proxySupport=true

You may also want **org.ops4j.pax.url.mvn.settings** to point to your Maven settings.xml file. **NOTE** use / in the path, not \.

    org.ops4j.pax.url.mvn.settings=C:/Program Files/MyStuff/apache-maven-3.0.5/conf/settings.xml

WildFly / Karaf will then use your [maven HTTP proxy settings](http://maven.apache.org/guides/mini/guide-proxies.html) from your **~/.m2/settings.xml** to connect to the maven repositories listed in **etc/org.ops4j.pax.url.mvn.cfg** to download artifacts.

### Enable JMX on Jetty 8.x

If you are using Jetty 8.x then JMX may not be enabled by default, so make sure the following line is not commented out in **jetty-distribution/start.ini** (you may have to uncomment it to enable JMX).

    etc/jetty-jmx.xml

<a name="embedded"></a>

## Using Hawtio embedded in a Java application

If you do not use a servlet container or application server and wish to embed Hawtio inside your Java application, try the following:

Add the following to your pom.xml

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

If you wish to do anything fancy it should be easy to override the Main class to find the hawtio-web.war in whatever place you wish to locate it (such as your local maven repo or download it from some server etc).

Depending on the war you are loading, you may also need to turn off authentication before running the embedded hawtio so that it can be accessible in an unauthenticated environment:

    System.setProperty("hawtio.authenticationEnabled", "false");

## Using a git clone

From a git clone you should be able to run Hawtio in a Spring Boot example application as follows:

    git clone git@github.com:hawtio/hawtio.git
    cd hawtio/examples/springboot
    mvn spring-boot:run

Then opening [http://localhost:10001/hawtio/](http://localhost:10001/hawtio/) should show Hawtio monitoring a sample web application that exposes information about Apache Camel routes, metrics, etc.

A good MBean for real time values and charts is `java.lang/OperatingSystem`. Try looking at Camel routes. Notice that as you change selections in the tree the list of tabs available changes dynamically based on the content.
