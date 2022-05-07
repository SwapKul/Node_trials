const path = require('path');                           // a core node module gives the absolute till the directory called in as __dirname
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/' ,(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))     // path.join joins the values to create the path
});

module.exports = router;