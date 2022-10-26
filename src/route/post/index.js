const router=require('koa-router')
const post=new router({prefix:'/post'})
const koaBody=require('koa-body')
const ctr=require('./post.ctr')

post.post('/:category',koaBody(),ctr.writePost)

module.exports=post