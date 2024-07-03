const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    createAt:{
        type:Date,
        default:new Date(),
    },
})


const blogData = mongoose.model('blog', blogSchema)
module.exports = blogData