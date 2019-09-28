const http = require("http");
const compose = require('./compose')


class Application {
  constructor() {
    this.middleware = [];
  }

  listen(...args) {
    const server = http.createServer();
    return server.listen(...args);
  }

  use(fn) {
    this.middleware.push(fn);
    return this
  }

  callback() {
    debugger
    const fn = compose(this.middleware);
  }
}

module.exports = Application;