const express = require('express');

const bodyParser = require('body-parser');                  // third party module for body parsing

const app = express();

app.use(bodyParser.urlencoded({extended: false}));                           // parses the body for all the app uses

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>ADD</button></form>');
});

app.post('/product', (req, res, next) => {                  // .use gets triggered for both the get and post requests, to use either one of them, use .get or .post
    console.log(req.body);
    res.redirect('/');

});

app.use('/', (req, res, next) => {
    console.log('home page accessed!');
    res.send('<h1>This is the home page.</h1>');

});

app.listen(3000);