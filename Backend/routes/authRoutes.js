const express = require('express');
const handleAllUsers = require('../controllers/Auth/handleAllUsers');
const handleResgister = require('../controllers/Auth/handleResgister');
const handleLogin = require('../controllers/Auth/handleLogin');

const router = express.Router();

// Auth Routes
router.get('/allUser', handleAllUsers);
router.post('/register', handleResgister);
router.post('/login', handleLogin)


module.exports = router;