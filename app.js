const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const body = require('koa-body')
const logUtil = require('./utils/log_util');
const users = require('./routes/users')
const {resolve} = require('path')
require("babel-register");
require("babel-polyfill");
const glob = require('glob')
const parcelHandle = require('./parcel/index')
//.sync(resolve(__dirname,'./parcel/*.js')).forEach(require)
console.log(parcelHandle)
// error handler
onerror(app)
//处理错误信息的中间件
require('./database/databases')
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(body())
//parcel 打包
parcelHandle.dev(app)

// routes api
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
