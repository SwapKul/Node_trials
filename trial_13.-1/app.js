const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');              //view engine registers the view engine to the specified. app.set() allows us to set any values globally in our express app. Even things that express don't understan can be passed.

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes)                            // adding /admin as the filter makes it the prefix of all the relevant routes
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);