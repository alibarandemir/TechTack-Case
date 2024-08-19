
const express=require('express');
const router= express.Router();
const {getAllPost}= require('../controllers/PostController.js')



router.get('/allPosts',getAllPost)


module.exports= router;