const categoryDB=require('../../../database/models/category')

module.exports={
    categories:async ()=>{
        const categories=await categoryDB.find()
        return categories
    },
    category:async (_,args)=>{
        const res=await categoryDB.findOne({urlSlug:args.urlSlug})
        return res
    }
}