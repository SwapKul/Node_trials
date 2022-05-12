const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const contactData = require('./contact-us');

const router = express.Router();

const info = []

router.get('/contact-us', (req, res, next) => {
    const info = contactData.info
    res.render('contact-us', {information: info, pageTitle: 'Contact Us', path: '/contact-us'});
});

router.post('/user-info', (req, res, next) => {
    info.push({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.number,
        uid: req.body.uid
    })
    res.redirect('/user-info');
});

exports.routes = router;
exports.info = info;