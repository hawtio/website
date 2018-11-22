---
title: "Maven Plugins"
---

Hawtio offers a number of Maven plugins, so that users can bootup Maven projects and have Hawtio embedded in the running JVM.

## Maven Goals

Hawtio offers the following Maven Goals, and each goal is further documented below:

<table class="table">
  <tr>
    <th>Goal</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>run</td>
    <td>This goal runs the Maven project, by executing the configured mainClass (as a public static void main)</td>
  </tr>
  <tr>
    <td>spring</td>
    <td>This goal runs the Maven project as a Spring application, by loading Spring XML configurations files from the classpath or file system.</td>
  </tr>
  <tr>
    <td>spring-boot</td>
    <td>This goal runs the Maven project as a Spring Boot application, by executing the configured Spring Boot mainClass.</td>
  </tr>
  <tr>
    <td>camel</td>
    <td>This goal is an extension to the <a href="https://camel.apache.org/camel-maven-plugin.html">Apache Camel Maven Plugins</a>, allowing to run the Camel Maven project and have Hawtio embedded. This allows users to gain visibility into the running JVM, and see what happens, such as live visualization of the Camel routes, and being able to debug and profile routes, and much more, offered by the Camel plugin.</td>
  </tr>
  <tr>
    <td>camel-blueprint</td>
    <td>The same as the camel goal but needed when using OSGi Blueprint Camel applications.</td>
  </tr>
  <tr>
    <td>camel-cdi</td>
    <td>The same as the camel goal but needed when using CDI Camel applications.</td>
  </tr>
  <tr>
    <td>test</td>
    <td>This goal run the unit tests of the Maven project.</td>
  </tr>
</table>

### Common Maven Goal configuration

All of the Hawtio Maven Plugins provides the following common options:

<table class="table">
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>logClasspath</td>
    <td>false</td>
    <td>Whether to log the classpath.</td>
  </tr>
  <tr>
    <td>logDependencies</td>
    <td>false</td>
    <td>Whether to log resolved Maven dependencies.</td>
  </tr>
  <tr>
    <td>offline</td>
    <td>false</td>
    <td>Whether to run hawtio in offline mode. Some of the hawtio plugins requires online connection to the internet.</td>
  </tr>
</table>

### run Maven Goal configuration

Currently all of the Hawtio Maven Plugins provides the following common options:

<table class="table">
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>context</td>
    <td>hawtio</td>
    <td>The context-path to use for the embedded hawtio web console.</td>
  </tr>
  <tr>
    <td>port</td>
    <td>8080</td>
    <td>The port number to use for the embedded hawtio web console. Notice the spring-boot goal uses port 9191 as default.</td>
  </tr>
  <tr>
    <td>mainClass</td>
    <td></td>
    <td>The fully qualified name of the main class to executed to bootstrap the Maven project. This option is required, and must be a public static void main Java class.</td>
  </tr>
  <tr>
    <td>openWebConsole</td>
    <td>true</td>
    <td>Wheter to automatic open the hawtio web console after 3 number of seconds</td>
  </tr>
  <tr>
    <td>openWebConsoleDelay</td>
    <td>3</td>
    <td>Number of seconds to wait before opening the web console</td>
  </tr>
  <tr>
    <td>arguments</td>
    <td></td>
    <td>Optional arguments to pass to the main class.</td>
  </tr>
  <tr>
    <td>systemProperties</td>
    <td></td>
    <td>Optional system properties to set on the JVM.</td>
  </tr>
</table>

### spring Maven Goal configuration

The spring goal extends the run goal and provides the following additional options:

<table class="table">
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>applicationContextUri</td>
    <td>META-INF/spring/*.xml</td>
    <td>Location on class-path to look for Spring XML files. Multiple paths can be separated with a semi colon. Only either one of applicationContextUri or fileApplicationContextUri can be in use.</td>
  </tr>
  <tr>
    <td>fileApplicationContextUri</td>
    <td></td>
    <td>Location on file system to look for Spring XML files. Multiple paths can be separated with a semi colon. Only either one of applicationContextUri or fileApplicationContextUri can be in use.</td>
  </tr>
</table>

### spring-boot Maven Goal configuration

The spring-boot goal has no additional options.

### camel Maven Goal configuration

The camel goal extends the run goal and provides the following additional options:

<table class="table">
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>applicationContextUri</td>
    <td>META-INF/spring/*.xml</td>
    <td>Location on class-path to look for Spring XML files. Multiple paths can be separated with a semi colon. Only either one of applicationContextUri or fileApplicationContextUri can be in use.</td>
  </tr>
  <tr>
    <td>fileApplicationContextUri</td>
    <td></td>
    <td>Location on file system to look for Spring XML files. Multiple paths can be separated with a semi colon. Only either one of applicationContextUri or fileApplicationContextUri can be in use.</td>
  </tr>
</table>

By default the camel plugin will assume the application is a Camel spring application and use the applicationContextUri or fileApplicationContextUri to use as Spring XML files. By configuring a custom mainClass, then the Camel application is using the custom mainClass to bootstrap the Camel application, and neither applicationContextUri, nor fileApplicationContextUri are in use.

### camel-blueprint Maven Goal configuration

The camel goal extends the run goal and provides the following additional options:

<table class="table">
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>applicationContext</td>
    <td>OSGI-INF/blueprint/*.xml</td>
    <td>Location on class-path to look for Blueprint XML files. Multiple paths can be separated with a semi colon. Only either one of applicationContext or fileApplicationContext can be in use.</td>
  </tr>
  <tr>
    <td>fileApplicationContext</td>
    <td></td>
    <td>Location on file-system to look for Blueprint XML files. Multiple paths can be separated with a semi colon. Only either one of applicationContext or fileApplicationContext can be in use.</td>
  </tr>
  <tr>
    <td>configAdminPid</td>
    <td></td>
    <td>To use a custom config admin persistence id. The configAdminFileName must be configured as well.</td>
  </tr>
  <tr>
    <td>configAdminFileName</td>
    <td></td>
    <td>Location of the configuration admin configuration file</td>
  </tr>
</table>

### camel-cdi Maven Goal configuration

The camel-cdi goal has no additional options.

### test Maven Goal configuration

The test Hawtio Maven Plugins provides the following common options:

<table class="table">
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>className</td>
    <td></td>
    <td>Optional to select a specific unit test class to start testing (must specific class name as fully qualified classname)</td>
  </tr>
  <tr>
    <td>testName</td>
    <td></td>
    <td>Optional to select a specific test method(s) to filter and use for testing. You can use * as wildcard to match multiple test methods.</td>
  </tr>
</table>

If no *className* has been specified then Hawtio is started up included the projects test classpath.

If a *className* has been specified then unit testing of the selected class happens when Hawtio has been started, **but** the unit test will not tear down until the user press enter in the shell. This is on purpose allowing using Hawtio to inspect the state of the JVM during and after testing. For example to look at the Camel plugin to see route diagrams and profiles with metrics from the completed unit tests.

Pressing enter in the shell runs the tear down of the unit tests, which for example could unregister Camel from JMX and therefore remove the CamelContext used during testing.

## Configuring hawtio Maven Plugin in pom.xml

In the Maven pom.xml file, the Hawtio plugin is configured by adding the following in the *build > plugin* section:

    <plugin>
      <groupId>io.hawt</groupId>
      <artifactId>hawtio-maven-plugin</artifactId>
      <version>2.x.x</version>
      <configuration>
        <!-- configuration options goes here -->
      </configuration>
    </plugin>

In the *configuration* section we can configure the plugin with any of the options mentioned before. For example to log the classpath:

      <configuration>
        <logClasspath>true</logClasspath>
      </configuration>

And to change the port number from 8282 to 8090 do:

      <configuration>
        <logClasspath>true</logClasspath>
        <port>8090</port>
      </configuration>

And to set a number of system properties to the JVM, such as the JVM http proxy settings is simply done within the nested *systemProperties* tag:

      <configuration>
        <logClasspath>true</logClasspath>
        <port>8090</port>
        <systemProperties>
          <http.proxyHost>myproxyserver.org</http.proxyHost>
          <http.proxyPort>8081<http.proxyPort>
        </systemProperties>
      </configuration>

## Camel Examples

The [Apache Camel distributions](https://camel.apache.org/download.html) includes a number of examples, which you can try out using Maven plugins.

For example to try the Camel console from a shell type:

    cd examples
    cd camel-example-console
    mvn compile
    mvn camel:run

To run the same example with Hawtio embedded as a web console, you simply do:

    cd examples
    cd camel-example-console
    mvn compile
    mvn io.hawt:hawtio-maven-plugin:2.x.x:camel

Where 2.x.x is the Hawtio version you are using.

### Adding hawtio plugin to the Apache Camel examples

In any Maven pom.xml file you can include the hawtio Maven plugin. For example to include the hawtio plugin in the Camel console example, you edit the pom.xml file in examples/camel-example-console directory.

In the *build > plugin* section, add the following xml code:

    <plugin>
      <groupId>io.hawt</groupId>
      <artifactId>hawtio-maven-plugin</artifactId>
      <version>2.x.x</version>
    </plugin>

And you can run the console example simply by typing:

    mvn hawtio:camel
