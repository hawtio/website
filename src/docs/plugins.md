---
title: "Plugins"
---

**Hawtio** is highly modular with lots of plugins (see below). After you have deployed hawtio into a container, as you add and remove new services to your JVM, the hawtio console updates in real time.

The following plugins are all included by default in Hawtio:

| Plugin      | Description                                                                                                                                                                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ActiveMQ    | Adds support for [Apache ActiveMQ](http://activemq.apache.org). Lets you browse broker statistics, create queues/topcs, browse queues, send messages and visualise subscription and network information.                                                                          |
| Camel       | Adds support for [Apache Camel](https://camel.apache.org). Lets you browse CamelContexts, routes, endpoints. Visualise running routes and their metrics. Create endpoints. Send messages. Trace message flows, as well profile routes to identifiy which parts runs fast or slow. |
| Core        | Provides the core plugin mechanisms.                                                                                                                                                                                                                                              |
| Diagnostics | The diagnostics plugin allow you to control the Java Flight Recorder, see class histogram and access to JVM flags.                                                                                                                                                                |
| JMX         | Provides the core [JMX](https://www.oracle.com/technetwork/java/javase/tech/javamanagement-140525.html) support for interacting with MBeans, viewing real time attributes, charting and invoking operations.                                                                      |
| JVM         | The jvm plugin allows you to connect to local or remote JVMs, and as well install the Jolokia JVM agent into the JVMs.                                                                                                                                                            |
| Karaf       | Adds support for [Apache Karaf](https://karaf.apache.org) so you can browse features, bundles, services and configuration.                                                                                                                                                        |
| Logs        | Provides support for visualising the logs inside the JVM.                                                                                                                                                                                                                         |
| OSGi        | Provides support for OSGi containers such as Apache Karaf using the standard OSGi management hooks.                                                                                                                                                                               |
| Runtime     | General overview of the Java process including threads, system properties and key metrics.                                                                                                                                                                                        |
| Spring Boot | Spring Boot plugin to show information about the Spring Boot application.                                                                                                                                                                                                         |
