const express = require('express');
const handleAllPosts = require('../controllers/Posts/handleAllPosts');
const handleCreatePost = require('../controllers/Posts/handleCreatePost');
const handleUpdatePost = require('../controllers/Posts/handleUpdatePost');
const handleDeletePost = require('../controllers/Posts/handleDeletePost');
const handleGetSinglePost = require('../controllers/Posts/handleGetSinglePost');
const handleGetUserPost = require('../controllers/Posts/handleGetUserPost');

const router = express.Router();

// Post Routes
router.get('/allPosts', handleAllPosts);
router.post('/createPost', handleCreatePost);
router.put('/updatePost/:id', handleUpdatePost);
router.delete('/deletePost/:id', handleDeletePost);
router.get('/:id', handleGetSinglePost);
router.get('/getByUserId/:id', handleGetUserPost)

module.exports = router;