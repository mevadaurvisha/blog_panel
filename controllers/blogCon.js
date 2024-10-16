const blogModel = require('../models/blog/blog-model');
const commentModel = require('../models/comment/comment-model');

const addBlog = (req, res) => {

    res.render('./pages/samples/add-blog');
}

const addBlogData = async (req, res) => {

    try {
        const blogData = new blogModel({

            title : req.body.title,
            content : req.body.content,
            blog_img : req.file.path,
            user_id : req.user._id,
            date :  req.body.date

        })
        console.log('Image path:', req.file.path);
        console.log('blogdata ____', blogData);

        const blog = await blogData.save();
        console.log('blogss', blog);

        res.redirect('/allBlog');

    }catch(err) {
        console.log('Err>>>' , err);
        res.redirect('/err');
    }
}


//edit blog

const editBlog = async (req, res) => {

    const {id} = req.params;

    const blogData = await blogModel.findOne({_id : id});

    console.log('edited data', blogData)

    res.render('./pages/samples/edit-blog' , {blogData});
    console.log('id....', id)
}

const updateBlog = async (req, res) => {

    const {id} = req.params;

    const blogData = {

        title : req.body.title,
        content : req.body.content,
        blog_img : req.file.path,
        date : req.body.date
    }

    try {
        const blog = await blogModel.updateOne({_id :id}, blogData);

        console.log('updated data' , blogData);
        res.redirect('/allBlog');
    }catch(err) {

        res.redirect('/editBlog');
    }
}

const deleteBlog = async (req, res) => {

    const { id } = req.params;

    const blogData = await blogModel.deleteOne({ _id: id });

    console.log('delete///' , blogData)

    res.redirect('/myBlog');
}


// view pages 

const allBlog = async (req, res) => {
    
    const commnetData = await commentModel.find({}).populate({path:'blogs',populate: {path : 'user_id', }}).populate('signup');
    const blogData = await blogModel.find();

    console.log('allBlogs ----' , blogData);
    console.log('commnetData ----' , commnetData);

    res.render('./pages/samples/viewBlogs' , {blogData: blogData , commentModel: commnetData});
}


const myBlog = async (req, res) => {

    const blogData = await blogModel.find({user_id: req.user._id});

    res.render('./pages/samples/myBlog' , { blogData: blogData});
}

const addComment = async (req, res) => {

    const data = {
        comment: req.body.comment,
        blog : req.params.id,
        user : req.user._id,
    }
    let model = await new commentModel(data);
    console.log("data", model);
    await model.save();

    res.redirect('/allBlog');
}

module.exports = {addBlog , addBlogData, editBlog, updateBlog, deleteBlog, allBlog, myBlog , addComment}