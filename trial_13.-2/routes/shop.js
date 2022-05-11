const path = require('path');                           // a core node module gives the absolute till the directory called in as __dirname
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/' ,(req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});               // passes products as prods key in the shop file to be rendered.
});

module.exports = router;