const post=require('../../database/models/post')
const {BODY_DESCRIPTION_LENGTH}=require('../../config/config')

exports.writePost=async (ctx)=>{
    const {title,body,urlSlug}=ctx.request.body

    const bodyDescription=body.length>BODY_DESCRIPTION_LENGTH?body.slice(0,BODY_DESCRIPTION_LENGTH)+'...':body
    const postConetent={
        title,
        body,
        bodyDescription,
        urlSlug,
        category:ctx.params.category
    }

    const res=await post.create(postConetent)

    ctx.body=postConetent
}

exports.deletePost=async (ctx)=>{
    await post.deleteOne({_id:ctx.params.id})
    ctx.body='post was removed'
}

exports.updatePost=async (ctx)=>{
    
}