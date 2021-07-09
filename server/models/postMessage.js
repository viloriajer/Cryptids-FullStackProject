import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    name: String,
    description:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema)

export default PostMessage;