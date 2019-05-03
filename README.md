# Sample Node.js Microservice in TypeScript

In this example we will be building a simple express based microservice in Node.js that doesn't do that much at all, but what is interesting about it is that we are writing the code in Typescript and we have that transpiled to ES6.

Also, and probably more interesting, we have the microservice containerized using docker (see the Dockerfile) and we also have the configuration that will allow us to deploy the service in an auto-scaling manner to Kubernetes using Helm charts (see the chart folder).

As a point of interest here are some microservice performance characteristics that compare Node.js apps versus Java (Spring boot) microservices. It should be noted here that the Java we are talking about here is a traditional full application server like JBoss or full Payara etc. We are not considering Java Microprofile or even more interestingly, Quarkus microservices. I would hazard a guess that the performance characteristics would change drastically in this case.

IO Speed (performance and scale)
- **express.js > 1000 ops/sec**
- Spring boot < 900 ops/sec

Startup (availability and scaling) dictated by how fast you can startup
- **0.9 seconds**
- 13.7 seconds

Memory
- **Node.js (express) ~20MB**
- Java (spring boot) ~400MB

We will build a simple ExpressJS app and deploy it as a container.

```
docker build -t <username>/node-ts-example .
docker run -p 49160:3000 -d <username>/node-ts-example
```