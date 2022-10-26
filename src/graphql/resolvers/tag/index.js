const postDB=require('../../../database/models/post')

module.exports={
    tags:async (_,args)=>{
        const tags=await postDB.find({},{tags:1,_id:0})
        let total=[]
        tags.forEach(el=>total=total.concat(el.tags))
        const tagList=total.reduce((acc,cur)=>{
            if(acc.hasOwnProperty(cur))
                acc[cur]+=1
            else
                acc[cur]=1
            return acc
        },{})
        
        return Object.entries(tagList).map(el=>{
            return{
                tagname:el[0],
                count:el[1]
            }
        })
    }
}