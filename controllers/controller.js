const flash =- require('connect-flash');


const defaultcontroller = async (req, res) => {

    console.log('record' , req.user);

    console.log('authentication' , req.isAuthenticated());

    // req.flash = 'success';

    req.flash('success', 'Login Sucessfully');
    // if(req.isAuthenticated()){
        res.render('index',{user: req.user , success: req.flash('success')});
    // }else{
    //     res.redirect('/login');
    // }
        
    
    
    
    // const user = await dataBase.findOne({ _id: req.cookies.userId });
    // if(req.cookies.userId){
    // }else{
    //     res.redirect('login');
    // }
    
}

module.exports = {defaultcontroller};