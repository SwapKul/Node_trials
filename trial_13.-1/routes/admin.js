const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));          // can use __dirname too instead of rootDir, but then we have to give the '../' too
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    // console.log(products);
    res.redirect('/');
})

exports.routes = router;
exports.products = products;