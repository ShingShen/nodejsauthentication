**Operation in terminal:**
1. npm init -y
2. npm i express bcryptjs passport passport-local express-ejs-layouts mongoose connect-flash express-session
3. npm i -D nodemon
* -D, --save-dev: Package will appear in your devDependencies.<br>

**Run Server**
npm run dev

**exchange of package.json:**
```
DELETE "main": "index.js",
ADD    "main": "app.js",
  "scripts": {
    DELETE "test": "echo \"Error: no test specified\" && exit 1"
    ADD "start": "node app.js", 
    ADD "dev": "nodemon app.js"
  },
  ```

  **config/auth.js**
  ```
  module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Please log in to view this resource');
        res.redirect('/users/login');
    }
}
  ```

  **config/key.js**
  ```
  module.exports = {
    MongoURI: 'connect code'
}
  ```

  **config/passport.js**
```
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match User
            User.findOne({ email: email })
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'That email is not registered!' });
                    }

                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Password incorrect!' });
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}
```