const router=require('koa-router')
const user=new router({prefix:'/user'})
const koaBody=require('koa-body')
const ctr=require('./user.ctr')

user.post('/login',koaBody(),ctr.login)
user.get('/login',ctr.checkLogin)

module.exports=user