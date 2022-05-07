const express = require('express');             // imports the express module

const app = express();                          // creates a server

app.get('/favicon.ico', (req, res) => res.status(204)); // catches the favicon request and stops from getting dual console output.

app.use((req, res, next) => {                   // allows to add a new middleware functions
    console.log('In the middleware!');
    next();                                     // if next is not set then the request won't go to the next middleware.
});

app.use((req, res, next) => {
    console.log('in another middleware!')        // contrary to the next function which shifts the use function, res.send() provides the response and thus the program never goes to the next app funciton
    res.send('<h1>This is heading 1</h1>');     // in-built express utility to facilitate the response, removes the use of manually setting the content type, and other basic detais.
});

app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);