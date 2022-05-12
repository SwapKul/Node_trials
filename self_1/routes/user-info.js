const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/user-info', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'user-info.html'))
});

module.exports = router;