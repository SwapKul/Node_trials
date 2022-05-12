const path = require('path');

const express = require('express');

const app = express();

const homeRoute = require('./routes/home');
const contactRoute = require('./routes/contact-us');
const userInfoRoute = require('./routes/user-info');

app.set('view engine', 'pug');

app.use(homeRoute);
app.use(contactRoute);
app.use(userInfoRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);