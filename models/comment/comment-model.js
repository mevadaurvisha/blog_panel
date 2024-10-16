const mongoose = require('mongoose');

const commentModelSchema = mongoose.Schema({
    comment : {
        type:String,
        required:true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blogs'   
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signup'   
    }
})

const commentModel = mongoose.model('comment',commentModelSchema);

module.exports = commentModel;