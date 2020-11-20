const mongoose= require('mongoose')

const Schema= mongoose.Schema
const exSchema= new Schema({
    Username:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    data:{type:Date,
    required:true}

},{timestamps:true})
const exercise= mongoose.model('exercise',exSchema)
module.exports=exercise