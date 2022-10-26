const postDB=require('../../database/models/post')
const mime=require('mime-types')
const s3=require('aws-sdk').S3
const crypto = require("crypto")

module.exports={
    createPost:async (_,params,ctx)=> {
        const {title,body,thumbnail,category,urlSlug,bodyDescription,tags}=params
        if(!ctx.user){
            throw new Error('no auth')
        }
        const res=await postDB.create({
            title,
            body,
            bodyDescription,
            urlSlug,
            thumbnail,
            category,
            tags
        })
        return {
            postID:res._id,
            urlSlug
        }
    },
    updatePost:async (_,params,ctx)=>{
        if(!ctx.user){
            throw new Error('no auth')
        }
        const payload={...params}
        delete payload._id
        await postDB.findByIdAndUpdate(params._id,payload)
        return {
            postID:'test'
        }
    },
    presignedURL:async (_,params,ctx)=> {
        if(!ctx.user){
            throw new Error('no auth')
        }

        const type=mime.lookup(params.type).split('/')[1]
        const fileName=crypto.randomBytes(20).toString('hex')
        const bucket=new s3({
            region:'ap-northeast-2'
        })

        const url=await bucket.getSignedUrl('putObject',{
            Bucket:'image.pizza7311.me',
            Key:`images/${type}/${fileName}.${type}`,
            ContentType: mime.lookup(params.type),
            Expires:60
        })
        return {
            key:`images/${type}/${fileName}.${type}`,
            url
        }
    }
}