const {Schema,model}=require('mongoose')

/**
 * 글제목
 * 내용
 * 쓴날짜
 * 썸네일 이미지 주소
 * 본문 요약
 * urlSlug
 * 글 카테고리
 */

const Post=new Schema({
    title:String,
    body:{
        type:String,
        maxLength:30000
    },
    date:{
        type:Date,
        default:Date.now
    },
    thumbnail:String,
    bodyDescription:String,
    urlSlug:String,
    category:String,
    tags:{
        type:Array,
        default:[]
    }
})



module.exports=model('post',Post)