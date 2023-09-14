---
createdAt: 2023-07-25T18:48:13.810Z
title: 'node js: How it Works'
description: "'node js' or node is an open source and cross-platform (RTE) for
  executing JavaScript code outside of a browser. RTE stands for: Runtime
  environment in which a program or application is executed. It's the hardware
  and software infrastructure that supports the running of a particular codebase
  in real time. "
---

![node js workflow](/img/fig-4-ma.jpg 'node js workflow')

**These are often used for:**

- back-end services (API)
- API: Powers the clients application
- API = application programming interfaces

**Pros:**

- used for prototyping
- agile development
- super fast and highly scalable services
- it's used in production large companies such as PayPal Uber.
- Built twice as fast with fewer people
- 33% fewer lines of code
- 40% fewer files
- 2x request/sec
- 35% faster response time

**Frontend javascript dev + node js = fullstack**

What is [node js](https://nodejs.org/en/)?

'node js' or node is an open source and cross-platform [(RTE)](https://www.techopedia.com/definition/5466/runtime-environment-rte) for executing JavaScript code outside of a browser. RTE stands for: Runtime environment in which a program or application is executed. It's the hardware and software infrastructure that supports the running of a particular codebase in real time.

To understand node js, let's first look at how servers work in general. As you can see in figure 1, the server is only one part of a much larger chain. Between the server and the client is an API. API stands for "application programming interfaces". API's are simply what the user sees and interacts with. They're just the surface, used to store data and send emails. Push notifications and kick off workflows (figure 2). node is ideal for building highly scalable data intensive and real-time back-end services that power our client applications. After the API comes the server which processes the client's request and passes the information back to the client via the API. A response time of ~1 ms possible. figure 3.

> fig.1

![Normal Server Request and Response](/img/fig-1-ma.jpg 'Normal Server Request and Response')

> fig.2

![Simple Server Request and Response](/img/fig-2-ma.jpg 'Simple Server Request and Response')

**How does a server respond to multiple requests at the same time?**

Figure 2. shows how a "normal" server reacts to "high traffic". You can see how the response time doubles per client. This is not an architecture you should build your server on. That's why many servers run Java "Tomcat Server" figure 4. These follow the concept of multi-threading and multiple request.

> fig.3

![Simple Server Request and Response](/img/fig-3-ma.jpg 'Tomcat Server Request and Response')

The server is able to process several requests at the same time. But it can only do this up to 200 requests at the same time. After that the client 201 would have to wait ~ 3 ms for his response.

> fig.4

![Tomcat Server Request and Response](/img/fig-5-ma.jpg 'Tomcat Server Request and Response')

**How does a server with node js installed react to the same scenario:**

node js is based on the concept of processing multiple requests without waiting for the response. But unlike the [Java Tomcat server](https://tomcat.apache.org/), node js runs only one thread. This thread processes the request asynchronously and or with a so-called callback as you can see in figure 4. For the fact that in Node only one thread is active, one could think that the server is slower, but the service workers can be compared with the threads in the Java Tomcat architecture, with the advantage that the number is not limited. Thus, Node is able to process several requests at the same time with one thread and with the help of the above mentioned functions is 35% faster compared to other server runtimes. This is of course very superficial as node js uses libuv lib for node built in C lang whose system kernel has multithreaded threads.

Service Worker = Threads
