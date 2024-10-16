const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title : { type:String , required:true },
    content : { type:String , required:true },
    blog_img : { type:String, required:true },
    date : { type : String, required : true, default : new Date() },
    user_id : {  type: mongoose.Schema.Types.ObjectId, ref: 'signup', required: true }
});

const blogModel = mongoose.model('blogs', blogSchema);
module.exports = blogModel;