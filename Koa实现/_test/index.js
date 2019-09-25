const Koa = require('../lib/application.js')


const app = new Koa()



app.use((req, res) => {
  res.writeHead(200);
  res.end('hello koa')
})


app.listen(3090, () => {
  console.log('server listen on 309')
})