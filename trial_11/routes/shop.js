const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('home page accessed!');
    res.send('<h1>This is the home page.</h1>');

});

module.exports = router;