const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const homeRoute = require('./routes/home');
const contactRoute = require('./routes/contact-us');
const userInfoRoute = require('./routes/user-info');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
app.use(contactRoute.routes);
app.use(userInfoRoute);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Error 404: Page Not Found'});
});

app.listen(3000);