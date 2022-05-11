const path = require('path');                           // a core node module gives the absolute till the directory called in as __dirname
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/' ,(req, res, next) => {
    console.log('shop.js', adminData.products);                // imports the products export from admin.js
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))     // path.join joins the values to create the path
});

module.exports = router;