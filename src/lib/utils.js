const sha512=require('hash.js/lib/hash/sha/512')
const {decodeToken}=require('./auth')

exports.genaratePasswordHash=(pw)=>{
    return sha512().update(pw).digest('hex')
}

exports.authenticateToken=()=>{
    return async (ctx,next)=>{
        const token=ctx.cookies.get('token')
        if(!token){
            ctx.user=null
            await next()
            return
        }
        try{
            const user=await decodeToken(token)
            ctx.user=user
        }catch(e){
            ctx.user=null
        }
        
        await next()
    }
}