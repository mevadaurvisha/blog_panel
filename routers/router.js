const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const signUp = require('../controllers/signUpcontroller');
const logIn = require('../controllers/logincontroller');
const passport = require('../config/passportCon');
const logOut = require('../controllers/logOutController')
const isAuth = require('../Authentication/isAuthenticate');
const password = require('../controllers/pass_controller');
const upload = require('../config/multer');
const blogCon = require('../controllers/blogCon');
const topic= require('../controllers/topic_Controller');

router.get('/', isAuth, controller.defaultcontroller);

//sign up
router.get('/signup', signUp.signUpForm);
router.post('/signupForm', signUp.signUpController);

//login
router.get('/login', logIn.loginForm);
router.post('/loginForm', passport.authenticate('local', { failureRedirect: '/login' }), logIn.logincontroller);

//logOut
router.get('/logout', logOut.logOutController);

//change password
router.get('/change-password',isAuth, password.changePassword);
router.post('/updatePassword', password.updatePassword); 

//forgot password
router.get('/forgot' , password.forgot);
router.post('/confirmUser', password.confirmUser);
router.get('/otp/:id', password.otp);
router.post('/ConfirmOTP/:id' , password.ConfirmOTP);
router.get('/reset/:id' , password.resetPass);
// router.post('/reset/:id' , password.resetPass);
router.get('/resetPass/:id' , password.resetPassword);
router.post('/resetPass/:id' , password.resetPassword);

//blogs
router.get('/addBlog' , blogCon.addBlog);
router.post('/addBlogData', upload , blogCon.addBlogData);
router.get('/allBlog',isAuth , blogCon.allBlog);
router.get('/myBlog',isAuth, blogCon.myBlog);
router.get('/editBlog/:id' , blogCon.editBlog);
router.post('/updateBlog/:id' ,upload, blogCon.updateBlog);
router.get('/deleteBlog/:id' , blogCon.deleteBlog)

//topic
router.get('/topic', topic.getTopic);
router.post('/addTopic' , topic.addTopic);
router.get('/viewTopic', topic.viewTopic);

//comment
router.post('/addComment/:id', isAuth ,blogCon.addComment)

router.get('/err' , password.error);
module.exports = router;