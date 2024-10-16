const topicModel = require('../models/Topic/topic-model');
const subTopicModel = require('../models/subTopic/subtopic-model')

const getTopic= (req, res) => {

    res.render('./pages/samples/addTopic');
}

const addTopic = async (req, res) => {

    console.log('add topic>>');
    console.log("req.body",req.body);
    const data = {
        topic : req.body.topic,
        user_id : req.user._id,
        name : req.user.name
    }

    const model = new topicModel(data);

    await model.save();

    console.log('Topics >>>',model);

    topicModel.find({}).then(topic => {
        console.log('database topic', topic);
        res.render('./pages/samples/addTopic',{ data: req.user, topic: topic });
    })
    .catch(err =>{
        console.log('Err', err);
    })

}


const viewTopic = async (req, res) => {

    console.log('view topic >>');

    try{
        const allTopics = await topicModel.find({});
        console.log('all topic' , allTopics);

        // Fetch all subtopics and populate the related topics
        const subTopics = await subTopicModel.find({}).populate('topic');

        // Group subtopics under their respective topics
        const topicsWithSubtopics = allTopics.map(topic => {
            const relatedSubtopics = subTopics.filter(sub => sub.topic && sub.topic._id.toString() === topic._id.toString());
            return {
                ...topic._doc, // Include topic details
                subtopics: relatedSubtopics // Add related subtopics
            };
        });

        // Render the view with the topics and their subtopics
        res.render('./pages/samples/viewTopic', {
            data: req.user,
            topicsWithSubtopics: topicsWithSubtopics
        });
    }
    catch(err) {
        console.log('Err>>', err)
    }
}

module.exports = {getTopic , addTopic, viewTopic};