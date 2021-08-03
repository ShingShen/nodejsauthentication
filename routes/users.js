const express = require('express');
const router = express.Router();

// Login Page: /users/login
router.get('/login', (req, res) => res.render('login'));

// Register Page: /users/register
router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/register', (req, res) => {
    
    // console.log(req.body)
    // res.send('hello');
});

module.exports = router;