const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const commentSchema=new Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamp:true});

const dishSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    comments:[commentSchema]
},{timestamp: true});

var Dishes=mongoose.model('dish',dishSchema);
module.exports=Dishes;