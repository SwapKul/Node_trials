const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>ADD</button></form>');
});

router.post('/product', (req, res, next) => {                  // .use gets triggered for both the get and post requests, to use either one of them, use .get or .post | .delete | .ppatch | .put
    console.log(req.body);
    res.redirect('/');

});

module.exports = router;