const jwt=require('jsonwebtoken')

exports.issueToken=async (payload)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(payload,process.env.TOKEN_KEY,{
            expiresIn:'1d',
            issuer:'pizza7311.me'
        },(err,token)=>{
            if(err)
            reject(err)
            resolve(token)
        })
    })
}

exports.decodeToken=async (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.TOKEN_KEY,(err,payload)=>{
            if(err)
            reject(err)
            resolve(payload)
        })
    })
}