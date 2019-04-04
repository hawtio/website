webpackJsonp([39068286934403],{570:function(e,o){e.exports={data:{markdownRemark:{html:'<p>Hawtio consists of 2 parts: an AngularJS applicaton and a Java backend, which proxies the communication between the frontend and <a href="https://jolokia.org/">Jolokia</a> endpoints. The frontend has access to all JMX attributes and operations available in Java applications running locally and remotely.</p>\n<p>Ways to run it:</p>\n<ul>\n<li><a href="#running-an-executable-jar">Running an executable JAR</a></li>\n<li><a href="#running-a-spring-boot-app">Running a Spring Boot app</a></li>\n<li><a href="#deploying-on-a-servlet-container">Deploying on a Servlet container</a></li>\n<li><a href="#deploying-on-an-application-server">Deploying on an application server</a></li>\n<li>\n<p><a href="#deploying-on-apache-karaf">Deploying on Apache Karaf</a></p>\n<ul>\n<li><a href="#if-you-use-an-http-proxy">If you use an HTTP proxy</a></li>\n</ul>\n</li>\n<li><a href="#using-hawtio-embedded-in-a-java-application">Using Hawtio embedded in a Java application</a></li>\n</ul>\n<p>The out of the box defaults try to do the right thing for most folks but if you want to configure things then please check out the <a href="../configuration/">configuration guide</a>.</p>\n<h2 id="running-an-executable-jar"><a href="#running-an-executable-jar" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running an executable JAR</h2>\n<p>You can startup Hawtio on your machine using the hawtio-app executable JAR.</p>\n<p><a class="btn btn-large btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-app/2.6.0/hawtio-app-2.6.0.jar">Download hawtio-app-2.6.0.jar</a></p>\n<p>Once you have downloaded it, just run this from the command line:</p>\n<pre><code>java -jar hawtio-app-2.6.0.jar\n</code></pre>\n<p>Note: If you launch Hawtio with Java 9+, add the specified modules to avoid errors on startup and allow attaching to other Java processes:</p>\n<pre><code>java --add-modules jdk.attach,java.xml.bind -jar hawtio-app-2.6.0.jar\n</code></pre>\n<p>The console should show you which URL to open, which by default is <code>http://localhost:8080/hawtio</code>.</p>\n<p>To set a different port number, run:</p>\n<pre><code>java -jar hawtio-app-2.6.0.jar --port 8090\n</code></pre>\n<p>To see the full list of configuration options, run:</p>\n<pre><code>java -jar hawtio-app-2.6.0.jar --help\n</code></pre>\n<h2 id="running-a-spring-boot-app"><a href="#running-a-spring-boot-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running a Spring Boot app</h2>\n<p>Attaching the Hawtio console to your Spring Boot app is simple.</p>\n<p><strong>Spring Boot 2</strong></p>\n<ol>\n<li>\n<p>Add <code>io.hawt:hawtio-springboot</code> to the dependencies in <code>pom.xml</code>:</p>\n<pre><code>&#x3C;dependency>\n  &#x3C;groupId>io.hawt&#x3C;/groupId>\n  &#x3C;artifactId>hawtio-springboot&#x3C;/artifactId>\n  &#x3C;version>2.6.0&#x3C;/version>\n&#x3C;/dependency>\n</code></pre>\n</li>\n<li>\n<p>Enable the Hawtio and Jolokia endpoints by adding the following line in <code>application.properties</code>:</p>\n<pre><code>management.endpoints.web.exposure.include=hawtio,jolokia\n</code></pre>\n</li>\n</ol>\n<p>Now you should be able to run Hawtio in your Spring Boot app as follows:</p>\n<pre><code>mvn spring-boot:run\n</code></pre>\n<p>Opening <code>http://localhost:8080/actuator/hawtio</code> should show the Hawtio console.</p>\n<p>If you\'d prefer to not have the <code>/actuator</code> base path, then you can customize the Spring Boot management base path with the <code>management.endpoints.web.base-path</code> property:</p>\n<pre><code>    management.endpoints.web.base-path=/\n</code></pre>\n<p>You can also customize the path to the Hawtio endpoint by setting the <code>management.endpoints.web.path-mapping.hawtio</code> property:</p>\n<pre><code>    management.endpoints.web.path-mapping.hawtio=hawtio/console\n</code></pre>\n<p><strong>Spring Boot 1</strong></p>\n<ol>\n<li>\n<p>Add <code>io.hawt:hawtio-springboot-1</code> to the dependencies in <code>pom.xml</code>:</p>\n<pre><code>&#x3C;dependency>\n  &#x3C;groupId>io.hawt&#x3C;/groupId>\n  &#x3C;artifactId>hawtio-springboot-1&#x3C;/artifactId>\n  &#x3C;version>2.6.0&#x3C;/version>\n&#x3C;/dependency>\n</code></pre>\n</li>\n<li>\n<p>Unlock the Jolokia endpoint by adding the following line in <code>application.properties</code>:</p>\n<pre><code>endpoints.jolokia.sensitive = false\n</code></pre>\n</li>\n</ol>\n<p>Now you should be able to run Hawtio in your Spring Boot app as follows:</p>\n<pre><code>mvn spring-boot:run\n</code></pre>\n<p>Opening <code>http://localhost:8080/hawtio</code> should show the Hawtio console.</p>\n<p>There is a working Spring Boot example that shows Hawtio monitoring a sample web application which exposes information about Apache Camel routes, metrics, etc.</p>\n<p><a class="btn btn-large btn-primary" href="https://github.com/hawtio/hawtio/tree/hawtio-2.6.0/examples/springboot">Hawtio Spring Boot example</a></p>\n<p>A good MBean for real time values and charts is <code>java.lang/OperatingSystem</code>. Try looking at Camel routes. Notice that as you change selections in the tree the list of tabs available changes dynamically based on the content.</p>\n<h2 id="deploying-on-a-servlet-container"><a href="#deploying-on-a-servlet-container" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploying on a Servlet container</h2>\n<p>If you use Tomcat or Jetty, you can deploy the Hawtio WAR file.</p>\n<p><a class="btn btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-default/2.6.0/hawtio-default-2.6.0.war">Download hawtio-default.war</a></p>\n<p>Please read the <a href="../configuration/">configuration guide</a> to see how to configure the console, in particular security.</p>\n<h2 id="deploying-on-an-application-server"><a href="#deploying-on-an-application-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploying on an application server</h2>\n<p>If you don\'t use the WildFly application server, use one of the options from the <a href="#deploying-on-a-servlet-container">Servlet container</a> section to download Hawtio.</p>\n<p>If you do use WildFly, download <a href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-wildfly/2.6.0/hawtio-wildfly-2.6.0.war">hawtio-wildfly-2.6.0.war</a>.</p>\n<p>To enable security, you\'ll need to set up configuration like this:</p>\n<pre><code>&#x3C;extensions>\n    ...\n&#x3C;/extensions>\n\n&#x3C;system-properties>\n    &#x3C;property name="hawtio.authenticationEnabled" value="true" />\n    &#x3C;property name="hawtio.realm" value="jboss-web-policy" />\n    &#x3C;property name="hawtio.role" value="admin" />\n&#x3C;/system-properties>\n</code></pre>\n<p>If you experience problems with security, you\'ll need to disable security in Hawtio. For WildFly, you can set the hawtio.authenticationEnabled system property in standalone/configuration/standalone.xml:</p>\n<pre><code>&#x3C;extensions>\n    ...\n&#x3C;/extensions>\n\n&#x3C;system-properties>\n    &#x3C;property name="hawtio.authenticationEnabled" value="false" />\n&#x3C;/system-properties>\n</code></pre>\n<h2 id="deploying-on-apache-karaf"><a href="#deploying-on-apache-karaf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploying on Apache Karaf</h2>\n<p>Hawtio provides the following features for Apache Karaf:</p>\n<div class="table-responsive">\n<table class="table table-striped table-condensed table-hover">\n  <thead>\n  <tr>\n    <th>Feature</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>hawtio-core</td>\n    <td>Installs the core Hawtio war file with minimal extensions</td>\n  </tr>\n  <tr>\n    <td>hawtio-rbac</td>\n    <td>Installs the Hawtio RBAC enabler bundles</td>\n  </tr>\n  <tr>\n    <td>hawtio-log</td>\n    <td>Installs the Hawtio logging backend MBeans</td>\n  </tr>\n  <tr>\n    <td>hawtio</td>\n    <td>Installs the main Hawtio web console</td>\n  </tr>\n</table>\n</div>\n<p>If you are using <a href="https://karaf.apache.org/">Apache Karaf</a> 4.x:</p>\n<pre><code>feature:repo-add hawtio 2.6.0\nfeature:install hawtio\n</code></pre>\n<p>This will install all the features listed above. The Hawtio console can then be viewed at <code>http://localhost:8181/hawtio</code>.</p>\n<p>Karaf versions prior to 4.x are not supported.</p>\n<h3 id="if-you-use-an-http-proxy"><a href="#if-you-use-an-http-proxy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>If you use an HTTP proxy</h3>\n<p>If you are behind an HTTP proxy, you\'ll need to enable HTTP proxy support in WildFly / Karaf to be able to download Hawtio from the central maven repository.</p>\n<p>There are a few <a href="https://mpashworth.wordpress.com/2012/09/27/installing-apache-karaf-features-behind-a-firewall/">articles about</a> <a href="https://stackoverflow.com/questions/9922467/how-to-setup-a-proxy-for-apache-karaf">this</a> which may help. Here are the steps:</p>\n<p>Edit the <code>etc/org.ops4j.pax.url.mvn.cfg</code> file and make sure the following line is uncommented:</p>\n<pre><code>org.ops4j.pax.url.mvn.proxySupport=true\n</code></pre>\n<p>You may also want <strong>org.ops4j.pax.url.mvn.settings</strong> to point to your Maven <code>settings.xml</code> file. <strong>NOTE</strong> use / in the path, not .</p>\n<pre><code>org.ops4j.pax.url.mvn.settings=C:/Program Files/MyStuff/apache-maven-3.0.5/conf/settings.xml\n</code></pre>\n<p>WildFly / Karaf will then use your <a href="https://maven.apache.org/guides/mini/guide-proxies.html">Maven HTTP proxy settings</a> from your <code>~/.m2/settings.xml</code> to connect to the maven repositories listed in <code>etc/org.ops4j.pax.url.mvn.cfg</code> to download artifacts.</p>\n<h2 id="using-hawtio-embedded-in-a-java-application"><a href="#using-hawtio-embedded-in-a-java-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Hawtio embedded in a Java application</h2>\n<p>If you do not use a servlet container or application server and wish to embed Hawtio inside your Java application, try the following:</p>\n<p>Add the following to your <code>pom.xml</code>:</p>\n<pre><code>&#x3C;dependency>\n  &#x3C;groupId>io.hawt&#x3C;/groupId>\n  &#x3C;artifactId>hawtio-embedded&#x3C;/artifactId>\n  &#x3C;version>${hawtio-version}&#x3C;/version>\n &#x3C;/dependency>\n</code></pre>\n<p>Then in your application run the following code:</p>\n<pre><code>import io.hawt.embedded.Main;\n\n...\nMain main = new Main();\nmain.setWar("somePathOrDirectoryContainingHawtioWar");\nmain.run();\n</code></pre>\n<p>If you wish to do anything fancy it should be easy to override the Main class to find the <code>hawtio-war.war</code> in whatever place you wish to locate it (such as your local maven repo or download it from some server etc).</p>\n<p>Depending on the war you are loading, you may also need to turn off authentication before running the embedded hawtio so that it can be accessible in an unauthenticated environment:</p>\n<pre><code>System.setProperty("hawtio.authenticationEnabled", "false");\n</code></pre>',frontmatter:{title:"Get Started"}}},pathContext:{slug:"/docs/get-started/"}}}});
//# sourceMappingURL=path---docs-get-started-79b45d30e09850f7bf50.js.map