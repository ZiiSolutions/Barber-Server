# Server: Barber Server (v1)
Server

# Usage

You need [node.js] installed globally:

## Run

To run the service please use the following;

```sh
$ npm install
$ npm start
```

### Unit Tests

Unit tests are run using the [mocha] framework, with coverage reports via [istanbul] and static analysis via [plato].

Install mocha, istanbul and plato globally:

```sh
$ npm install -g mocha
$ npm install -g istanbul
$ npm install -g git+https://github.com/deedubs/es6-plato.git
```

Run unit tests;

```sh
$ npm test
```

or to report using junit-compatible xml reporting;

```sh
mocha --reporter mocha-junit-reporter
```

[node.js]:http://nodejs.org
[express]:http://expressjs.com
[node-dev]:https://github.com/fgnass/node-dev
[mocha]:https://mochajs.org/
[istanbul]:https://github.com/gotwarlost/istanbul
[zookeeper]:https://zookeeper.apache.org/
[plato]:https://github.com/es-analysis/plato
[WP API (v2)]: http://v2.wp-api.org/
[post status transition]:https://codex.wordpress.org/Post_Status_Transitions
[Image Metadata (v1)]: https://github.com/PressAssociation/content-ingest-image-metadata-v1
