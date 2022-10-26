const {Schema,model}=require('mongoose')


/**
 * id,
 * password
 */

const User=new Schema({
    id:String,
    password:String,
    salt:String
})

module.exports=model('user',User)