const express = require('express');
const bodyParser = require('body-parser');                  // third party module for body parsing

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({extended: false}));                           // parses the body for all the app uses

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);