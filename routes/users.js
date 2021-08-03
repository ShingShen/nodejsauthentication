const express = require('express');
const router = express.Router();

// Login Page: /users/login
router.get('/login', (req, res) => res.render('login'));

// Register Page: /users/register
router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    // Check password length
    if (password.length < 5) {
        errors.push({ msg: 'Password should be at leadt 5 characters' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        res.send('pass');
    }


    // console.log(req.body)
    // res.send('hello');
});

module.exports = router;