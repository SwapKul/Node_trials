const express = require('express');

const Router = express.Router();

router.use('/', (req, res, next) => {
    console.log('home page accessed!');
    res.send('<h1>This is the home page.</h1>');

});

module.exports = router;