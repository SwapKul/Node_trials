const path = require('path');

const express = require('express');

const app = express();

const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');

app.use(homeRoute);
app.use(userRoute);
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);