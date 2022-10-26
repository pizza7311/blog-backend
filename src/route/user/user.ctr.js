const {issueToken}=require('../../lib/auth')
const user=require('../../database/models/user')
const {genaratePasswordHash}=require('../../lib/utils')

exports.login=async (ctx)=>{
    const {id,pw}=ctx.request.body
    console.log(ctx.request.body)

    const userInfo=await user.findOne({id})
    if(!userInfo){
        ctx.throw(404)
        return
    }
    const hashPassword=genaratePasswordHash(pw+userInfo.salt)
    if(hashPassword!==userInfo.password){
        ctx.throw(404)
        return
    }

    const token=await issueToken({})
    ctx.cookies.set('token',token,{
    })
    ctx.body=token
}

exports.checkLogin=async (ctx)=>{
    if(!ctx.user){
        ctx.body=false
        return
    }

    ctx.body=true
}