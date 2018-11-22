---
title: "FAQ"
---

#### What is the Hawtio license?

Hawtio uses the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.txt).

#### What does Hawtio do?

It's a [pluggable](/docs/plugins) management console for Java stuff which supports any kind of JVM, any kind of container (Tomcat, Jetty, WildFly, Karaf, etc), and any kind of Java technology and middleware.

#### How do I install Hawtio?

See the [Getting Started guide](/docs/get-started) and the [Configuration guide](/docs/configuration/).

#### How do I configure Hawtio?

Mostly Hawtio just works. However, please check out the [Configuration guide](/docs/configuration/) to see what kinds of things you can configure via system properties, environment variables, web.xml context-params or dependency injection.

#### How do I disable security?

Hawtio has security enabled by default using the underlying application container's security mechanism. Have a look at the [Configuring Security](/docs/configuration/#configuring-security) section of the Configuration to learn how to disable security.

#### Which Java version is required?

- Hawtio 2.0 onwards - requires Java 8.
- Hawtio 1.5 onwards - requires Java 8.
- Hawtio 1.4 - requires Java 7 or 8.
- Hawtio 1.3 or older - supports Java 6 and 7.

#### How do I enable Hawtio inside my Java Application / Spring Boot / DropWizard / Micro Service?

The easiest thing to do is add jolokia as a java agent via a java agent command line:

    java -javaagent:jolokia-agent.jar=host=0.0.0.0 -jar foo.jar

Then by default you can connect on http;//localhost:8778/jolokia to access the jolokia REST API.

Now you can use the standalone Hawtio application to connect to it. This strategy minimises the effect of Hawtio/jolokia on your app (e.g. you don't need to mess about with what's inside your application or even change the classpath).

#### How do I connect to my remote JVM?

All that's required for Hawtio to connect to any remote JVM is that a [jolokia agent](https://jolokia.org/agent.html) is attached to the JVM you wish to connect to. There are a few different agents you can use:

- [WAR agent](http://jolokia.org/agent/war.html) if you are using a servlet container
- [OSGi agent](http://jolokia.org/agent/osgi.html) if you are using OSGi
- [JVM agent](http://jolokia.org/agent/jvm.html) if you are using a standalone process

So once you've got a jolokia agent in your JVM you can test it by accessing `http://host:port/jolokia` in a browser to see if you can view the JSON returned for the version information of the jolokia agent.

Assuming you have jolokia working in your JVM, then you can use the *Remote* tab on the *Connect* menu in Hawtio to connect.

**Note**: by default only *localhost* is accepted to connect for security, so you need to configure the *hawtio.proxyWhitelist* system property or the *proxyWhitelist* init parameter on ProxyServlet in hawtio.war's WEB-INF/web.xml to explicitly allow hosts that you are connecting to.

After trying the above, if you still have problems connecting to your JVM, please get in touch with the [community](/community) or [raise an issue](https://github.com/hawtio/hawtio/issues).

#### How do I install a plugin?

Each Hawtio distro has these [browser based plugins](/docs/plugins) inside already. Additionally, Hawtio can discover any other external plugins deployed in the same JVM.

Then the Hawtio UI updates itself in real time based on what it can find in the server side JVM it connects to. So, for example, if you connect to an empty tomcat/jetty you'll just see things like JMX and Runtime.

Then if you deploy a WAR which has ActiveMQ or Camel inside it, you should see an ActiveMQ or Camel tab appear as you deploy code which registers mbeans for ActiveMQ or Camel.

So usually, if you are interested in a particular plugin and its not visible in the Hawtio UI (after checking your preferences in case you disabled it), usually you just need to deploy or add a server side plugin; which is usually a case of deploying some Java code (e.g. ActiveMQ, Camel, Infinispan etc).

#### Why does Hawtio log a bunch of 404s to the javascript console at startup?

The Hawtio help registry tries to automatically discover help data for each registered plugin even if plugins haven't specifically registered a help file.

#### Why isn't the Camel plugin visible?

The Camel plugin currently requires that the Camel MBeans are stored using the default domain name which is `org.apache.camel`. So if you configure Camel to use a different name, using the `mbeanObjectDomainName` configuration, then the Camel plugin will not work. See details reported in ticket [1712](https://github.com/hawtio/hawtio/issues/1712).

#### Why doesn't the Debug tab appear for my Camel route?

The Debug tab depends on the JMX MBeans provided by the Camel release you use. It requires at least version 2.12.x or later of your Camel library to be running.

#### Why doesn't the Trace tab appear for my Camel route?

The Trace tab depends on the JMX MBeans provided by the Camel release you use. It requires either a 2.12.x or later distro of Camel or a Fuse distro of Camel from about 2.8 or later.
