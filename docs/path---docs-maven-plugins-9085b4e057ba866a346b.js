webpackJsonp([0xc02b13629f32],{580:function(t,e){t.exports={data:{markdownRemark:{html:'<div class="alert alert-danger">\n<strong>TO BE UPDATED:</strong> This document still refers to old v1 information that needs to be updated\n</div>\n<p>Hawtio offers a number of Maven plugins, so that users can bootup Maven projects and have Hawtio embedded in the running JVM.</p>\n<h2 id="maven-goals"><a href="#maven-goals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Maven Goals</h2>\n<p>Hawtio offers the following Maven Goals, and each goal is further documented below:</p>\n<table class="table">\n  <tr>\n    <th>Goal</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>run</td>\n    <td>This goal runs the Maven project, by executing the configured mainClass (as a public static void main)</td>\n  </tr>  \n  <tr>\n    <td>spring</td>\n    <td>This goal runs the Maven project as a Spring application, by loading Spring XML configurations files from the classpath or file system.</td>\n  </tr>    \n  <tr>\n    <td>spring-boot</td>\n    <td>This goal runs the Maven project as a Spring Boot application, by executing the configured Spring Boot mainClass.</td>\n  </tr>    \n  <tr>\n    <td>camel</td>\n    <td>This goal is an extension to the <a href="http://camel.apache.org/camel-maven-plugin.html">Apache Camel Maven Plugins</a>, allowing to run the Camel Maven project and have hawtio embedded. This allows users to gain visibility into the running JVM, and see what happens, such as live visualization of the Camel routes, and being able to debug and profile routes, and much more, offered by the <a href="http://hawt.io/plugins/camel/">Camel plugin</a>.</td>\n  </tr>\n  <tr>\n    <td>camel-blueprint</td>\n    <td>The same as the camel goal but needed when using OSGi Blueprint Camel applications.</td>\n  </tr>         \n  <tr>\n    <td>camel-cdi</td>\n    <td>The same as the camel goal but needed when using CDI Camel applications.</td>\n  </tr>         \n  <tr>\n    <td>test</td>\n    <td>This goal run the unit tests of the Maven project. Can be used together with the <a href"http://hawt.io/plugins/junit.html">JUnit</a> plugin to run unit tests from within hawtio console as well.</td>\n  </tr>         \n</table>\n<h3 id="common-maven-goal-configuration"><a href="#common-maven-goal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Common Maven Goal configuration</h3>\n<p>All of the Hawtio Maven Plugins provides the following common options:</p>\n<table class="table">\n  <tr>\n    <th>Option</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>logClasspath</td>\n    <td>false</td>\n    <td>Whether to log the classpath.</td>\n  </tr>  \n  <tr>\n    <td>logDependencies</td>\n    <td>false</td>\n    <td>Whether to log resolved Maven dependencies.</td>\n  </tr>  \n  <tr>\n    <td>offline</td>\n    <td>false</td>\n    <td>Whether to run hawtio in offline mode. Some of the hawtio plugins requires online connection to the internet.</td>\n  </tr>  \n</table>\n<h3 id="run-maven-goal-configuration"><a href="#run-maven-goal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>run Maven Goal configuration</h3>\n<p>Currently all of the Hawtio Maven Plugins provides the following common options:</p>\n<table class="table">\n  <tr>\n    <th>Option</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>context</td>\n    <td>hawtio</td>\n    <td>The context-path to use for the embedded hawtio web console.</td>\n  </tr>  \n  <tr>\n    <td>port</td>\n    <td>8080</td>\n    <td>The port number to use for the embedded hawtio web console. Notice the spring-boot goal uses port 9191 as default.</td>\n  </tr>  \n  <tr>\n    <td>mainClass</td>\n    <td></td>\n    <td>The fully qualified name of the main class to executed to bootstrap the Maven project. This option is required, and must be a public static void main Java class.</td>\n  </tr>  \n  <tr>\n    <td>openWebConsole</td>\n    <td>true</td>\n    <td>Wheter to automatic open the hawtio web console after 3 number of seconds</td>\n  </tr>  \n  <tr>\n    <td>openWebConsoleDelay</td>\n    <td>3</td>\n    <td>Number of seconds to wait before opening the web console</td>\n  </tr>  \n  <tr>\n    <td>arguments</td>\n    <td></td>\n    <td>Optional arguments to pass to the main class.</td>\n  </tr>  \n  <tr>\n    <td>systemProperties</td>\n    <td></td>\n    <td>Optional system properties to set on the JVM.</td>\n  </tr>  \n</table>\n<h3 id="spring-maven-goal-configuration"><a href="#spring-maven-goal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>spring Maven Goal configuration</h3>\n<p>The spring goal extends the run goal and provides the following additional options:</p>\n<table class="table">\n  <tr>\n    <th>Option</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>applicationContextUri</td>\n    <td>META-INF/spring/*.xml</td>\n    <td>Location on class-path to look for Spring XML files. Mulutple paths can be seperated with semi colon. Only either one of applicationContextUri or fileApplicationContextUri can be in use.</td>\n  </tr> \n  <tr>\n    <td>fileApplicationContextUri</td>\n    <td></td>\n    <td>Location on file system to look for Spring XML files. Mulutple paths can be seperated with semi colon. Only either one of applicationContextUri or fileApplicationContextUri can be in use.</td>\n  </tr>     \n</table>\n<h3 id="spring-boot-maven-goal-configuration"><a href="#spring-boot-maven-goal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>spring-boot Maven Goal configuration</h3>\n<p>The spring-boot goal has no additional options.</p>\n<h3 id="camel-maven-goal-configuration"><a href="#camel-maven-goal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>camel Maven Goal configuration</h3>\n<p>The camel goal extends the run goal and provides the following additional options:</p>\n<table class="table">\n  <tr>\n    <th>Option</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>applicationContextUri</td>\n    <td>META-INF/spring/*.xml</td>\n    <td>Location on class-path to look for Spring XML files. Mulutple paths can be seperated with semi colon. Only either one of applicationContextUri or fileApplicationContextUri can be in use.</td>\n  </tr> \n  <tr>\n    <td>fileApplicationContextUri</td>\n    <td></td>\n    <td>Location on file system to look for Spring XML files. Mulutple paths can be seperated with semi colon. Only either one of applicationContextUri or fileApplicationContextUri can be in use.</td>\n  </tr>     \n</table>\n<p>By default the camel plugin will assume the application is a Camel spring application and use the applicationContextUri or fileApplicationContextUri to use as Spring XML files. By configurign a custom mainClass, then the Camel application is using the custom mainClass to bootstrap the Camel application, and neither applicationContextUri, nor fileApplicationContextUri are in use.</p>\n<h3 id="camel-blueprint-maven-goal-configuration"><a href="#camel-blueprint-maven-goal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>camel-blueprint Maven Goal configuration</h3>\n<p>The camel goal extends the run goal and provides the following additional options:</p>\n<table class="table">\n  <tr>\n    <th>Option</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>applicationContext</td>\n    <td>OSGI-INF/blueprint/*.xml</td>\n    <td>Location on class-path to look for Blueprint XML files. Mulutple paths can be seperated with semi colon. Only either one of applicationContext or fileApplicationContext can be in use.</td>\n  </tr> \n  <tr>\n    <td>fileApplicationContext</td>\n    <td></td>\n    <td>Location on file-system to look for Blueprint XML files. Mulutple paths can be seperated with semi colon. Only either one of applicationContext or fileApplicationContext can be in use.</td>\n  </tr> \n  <tr>\n    <td>configAdminPid</td>\n    <td></td>\n    <td>To use a custom config admin persistence id. The configAdminFileName must be configured as well.</td>\n  </tr> \n  <tr>\n    <td>configAdminFileName</td>\n    <td></td>\n    <td>Location of the configuration admin configuration file</td>\n  </tr>     \n</table>\n<h3 id="camel-cdi-maven-goal-configuration"><a href="#camel-cdi-maven-goal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>camel-cdi Maven Goal configuration</h3>\n<p>The camel-cdi goal has no additional options.</p>\n<h3 id="test-maven-goal-configuration"><a href="#test-maven-goal-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>test Maven Goal configuration</h3>\n<p>The test Hawtio Maven Plugins provides the following common options:</p>\n<table class="table">\n  <tr>\n    <th>Option</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>className</td>\n    <td></td>\n    <td>Optional to select a specific unit test class to start testing (must specific class name as fully qualified classname)</td>\n  </tr>  \n  <tr>\n    <td>testName</td>\n    <td></td>\n    <td>Optional to select a specific test method(s) to filter and use for testing. You can use * as wildcard to match multiple test methods.</td>\n  </tr>  \n</table>\n<p>If no <strong>className</strong> has been specified then Hawtio is started up included the projects test classpath, and the <a href="hawt.io/plugins/junit">junit plugin</a> can be used to select tests to run from within Hawtio console itself.</p>\n<p>If a <strong>className</strong> has been specified then unit testing of the selected class happens when Hawtio has been started, <strong>but</strong> the unit test will not tear down until the user press enter in the shell. This is on purpose allowing using Hawtio to inspect the state of the JVM during and after testing. For example to look at the Camel plugin to see route diagrams and profiles with metrics from the completed unit tests. </p>\n<p>Pressing enter in the shell runs the tear down of the unit tests, which for example could unregister Camel from JMX and therefore remove the CamelContext used during testing. When using the <a href="hawt.io/plugins/junit">junit plugin</a> to run unit tests, then these tests will tear down immediately when they complete, and therefore remove any CamelContexts during testing. This may change in the future, allows to keep the CamelContexts alive after testing, giving end users time to inspect the data; and then tear down by pressing a button.</p>\n<h2 id="configuring-hawtio-maven-plugin-in-pomxml"><a href="#configuring-hawtio-maven-plugin-in-pomxml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring hawtio Maven Plugin in pom.xml</h2>\n<p>In the Maven pom.xml file, the Hawtio plugin is configured by adding the following in the &#x3C;build>&#x3C;plugin>section:</p>\n<pre><code>&#x3C;plugin>\n  &#x3C;groupId>io.hawt&#x3C;/groupId>\n  &#x3C;artifactId>hawtio-maven-plugin&#x3C;/artifactId>\n  &#x3C;version>1.5.9&#x3C;/version>\n  &#x3C;configuration>\n    &#x3C;!-- configuration options goes here -->\n  &#x3C;/configuration>\n&#x3C;/plugin>\n</code></pre>\n<p>In the &#x3C;configuration> section we can configure the plugin with any of the options mentioned before. For example to log the classpath:</p>\n<pre><code>  &#x3C;configuration>\n    &#x3C;logClasspath>true&#x3C;/logClasspath>\n  &#x3C;/configuration>\n</code></pre>\n<p>And to change the port number from 8282 to 8090 do:</p>\n<pre><code>  &#x3C;configuration>\n    &#x3C;logClasspath>true&#x3C;/logClasspath>\n    &#x3C;port>8090&#x3C;/port>\n  &#x3C;/configuration>\n</code></pre>\n<p>And to set a number of system properties to the JVM, such as the JVM http proxy settings is simply done within the nested &#x3C;systemProperties> tag:</p>\n<pre><code>  &#x3C;configuration>\n    &#x3C;logClasspath>true&#x3C;/logClasspath>\n    &#x3C;port>8090&#x3C;/port>\n    &#x3C;systemProperties>\n      &#x3C;http.proxyHost>myproxyserver.org&#x3C;/http.proxyHost>\n      &#x3C;http.proxyPort>8081&#x3C;http.proxyPort>\n    &#x3C;/systemProperties>  \n  &#x3C;/configuration>\n</code></pre>\n<h2 id="camel-examples"><a href="#camel-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Camel Examples</h2>\n<p>The <a href="http://camel.apache.org/download.html">Apache Camel distributons</a> includes a number of examples, which you can try out using Maven plugins.</p>\n<p>For example to try the Camel console from a shell type:</p>\n<pre><code>cd examples\ncd camel-example-console\nmvn compile\nmvn camel:run\n</code></pre>\n<p>To run the same example with Hawtio embedded as a web console, you simply do</p>\n<pre><code>cd examples\ncd camel-example-console\nmvn compile\nmvn io.hawt:hawtio-maven-plugin:1.5.9:camel\n</code></pre>\n<p>Where 1.5.9 is the Hawtio version to use.</p>\n<h3 id="adding-hawtio-plugin-to-the-apache-camel-examples"><a href="#adding-hawtio-plugin-to-the-apache-camel-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding hawtio plugin to the Apache Camel examples</h3>\n<p>In any Maven pom.xml file you can include the hawtio Maven plugin. For example to include the hawtio plugin in the Camel console example, you edit the pom.xml file in examples/camel-example-console directory. </p>\n<p>In the &#x3C;build>&#x3C;plugin>section add the following xml code:</p>\n<pre><code>&#x3C;plugin>\n  &#x3C;groupId>io.hawt&#x3C;/groupId>\n  &#x3C;artifactId>hawtio-maven-plugin&#x3C;/artifactId>\n  &#x3C;version>1.5.9&#x3C;/version>\n&#x3C;/plugin>\n</code></pre>\n<p>And you can run the console example simply by typing</p>\n<pre><code>mvn hawtio:camel\n</code></pre>\n<p>And the example is started together with the embedded Hawtio web console, such as the screenshot below illustrates:</p>\n<img src="https://raw.github.com/hawtio/hawtio/master/docs/images/camel-example-console.png" alt="screenshot">',frontmatter:{title:"Maven Plugins"}}},pathContext:{slug:"/docs/maven-plugins/"}}}});
//# sourceMappingURL=path---docs-maven-plugins-9085b4e057ba866a346b.js.map