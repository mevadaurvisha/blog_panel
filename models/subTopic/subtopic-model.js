const mongoose = require('mongoose');

const subTopicSchema = mongoose.Schema({

    subTopic : {
        type : String,
        required : true
    },
    topic : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topics'
    }
})

const subTopicModel = mongoose.model('subtopics' , subTopicSchema);

module.exports = subTopicModel;