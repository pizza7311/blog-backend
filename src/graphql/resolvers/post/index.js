const postDB=require('../../../database/models/post')

module.exports={
        posts:async (_,{category,page=1,tag},ctx)=>{
            const p=parseInt(page,10)
            const skipValue=p>1?p*10-10:0
            if(category){
                const [posts,totalLength]=await Promise.all([
                    postDB.find({category}).sort({"date":-1}).skip(skipValue).limit(10),
                    postDB.count()
                ])
                return {
                    posts,
                    hasNext:skipValue+10<totalLength,
                    hasPrev:p>1
                }
            }
            if(tag){
                const [posts,totalLength]=await Promise.all([
                    postDB.find({tags:tag}).sort({"date":-1}).skip(skipValue).limit(10),
                    postDB.count({tags:tag})
                ])
                return {
                    posts,
                    hasNext:skipValue+10<totalLength,
                    hasPrev:p>1
                }
            }
            const [posts,totalLength]=await Promise.all([
                postDB.find().sort({"date":-1}).skip(skipValue).limit(10),
                postDB.count()
            ])

            return {
                posts,
                hasNext:skipValue+10<totalLength,
                hasPrev:skipValue+10>totalLength
            }
        },
        post:async (_,args)=>{
            const post=await postDB.findOne({urlSlug:args.urlSlug})
            return post
        },
        postById:async (_,args)=>{
            const post=await postDB.findById(args._id)
            return post
        }
}