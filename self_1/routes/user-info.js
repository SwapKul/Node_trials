const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');
const contactData = require('./contact-us');

const info = []

router.get('/user-info', (req, res, next) => {
    const info = contactData.info;
    res.render('user-info', {information: info, pageTitle: 'User Info', path: '/user-info'})
});

module.exports = router;