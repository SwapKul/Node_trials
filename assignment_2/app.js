const express = require('express');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/users', (req, res, next) => {
    console.log('user page accessed!');
    res.send('<h1>This is the user page.</h1>');
});

app.use('/', (req, res, next) => {
    console.log('home page accessed!');
    res.send('<h1>This is the home page.</h1>');

});

app.listen(3000);