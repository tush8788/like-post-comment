const UserDB=require('../models/user');
//sign in page
module.exports.signIn=function(req,res){
    return res.render('signin',{title:"Sigin"});
}

//sign up page
module.exports.signUp=function(req,res){
    return res.render('signup',{title:"Signup"});
}

//signup
module.exports.signUpData= async function(req,res){
    try{
        if(req.body.password != req.body.conformPassword){
            console.log("password and comform password not match");
            return res.redirect('back');
        }

        let user = await UserDB.findOne({email:req.body.email});

        if(!user){
            user=await UserDB.create(req.body);
            console.log("user create successfully");
            return res.redirect('/user/signin');
        } 

        console.log("user already exist in DB");

        return res.redirect('/user/signup');

    }
    catch(err){
        console.log(err)
    }
}

//signin
module.exports.signInData=function(req,res){
    console.log(req.body);
}
