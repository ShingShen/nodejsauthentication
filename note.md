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

  **config/key.js**
  ```
  module.exports = {
    MongoURI: 'connect code'
}
  ```