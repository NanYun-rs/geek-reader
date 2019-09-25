const http = require('http')

class Application {
  constructor() {
    this.callbackFunc = ''
  }

  listen(...args) {
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }

  use(fn) {
    this.callbackFunc = fn
  }

  callback() {
    return (req, res) => {
      this.callbackFunc(req, res)
    }
  }


}


module.exports = Application