const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

const app = express();

app.engine('handleBars', expressHbs.engine({
    defaultLayout: 'main-layout'
}));
app.set('view engine', 'handleBars');              //view engine registers the view engine to the specified. app.set() allows us to set any values globally in our express app. Even things that express don't understan can be passed.
// app.set('views', 'views');                  // tells the express to look for the views[html files] in the views folder, default set to views.

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes)                            // adding /admin as the filter makes it the prefix of all the relevant routes
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Error 404: Page Not Found'});
})

app.listen(3000);