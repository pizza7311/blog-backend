const router = require('koa-router')
const route=new router()
const post = require('./post')
const user=require('./user')

route.use(post.routes())
route.use(user.routes())

module.exports=route