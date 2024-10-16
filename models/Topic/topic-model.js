const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({

    topic : {
        type : String,
        required : true
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'signup'
    },
    name : {
        type: String,
        required : true
    }
})

const topicModel = mongoose.model('topics', topicSchema);

module.exports = topicModel;