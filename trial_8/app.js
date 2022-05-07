const express = require('express');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/', (req, res, next) => {
    console.log('always running');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('hi2');
    res.send('<h1>Products? Noice!!</h1>')
});

app.use('/', (req, res, next) => {
    console.log('hi');
    res.send('<h1>Try all you want!!</h1>')
});

app.listen(3000);