const {Schema,model}=require('mongoose')

/**
 * id(자동 생성)
 * 카테고리 명
 * url slug
 * 포스트 갯수
 */

const category=new Schema({
    name:String,
    urlSlug:String,
    numbersOfPosts:Number,
})

module.exports=model('category',category)