const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
});

router.post('/user-info', (req, res, next) => {
    console.log(bodyParser.concat)
});

module.exports = router;