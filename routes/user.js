const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');

router.get('/signin',userController.signIn);

router.get('/signup',userController.signUp);

router.post('/signin',userController.signInData);

router.post('/signup',userController.signUpData)

module.exports=router