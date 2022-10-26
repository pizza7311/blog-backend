const mongoose=require('mongoose')

module.exports = async ()=>{
    return mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(conn=>{
        console.log('db connected')
    }).catch(e=>{
        console.log(e)
    })
}