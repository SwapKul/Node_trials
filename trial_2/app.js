// creating a server
const http = require('http');

// function rqListener(req, res) {

// };

// http.createServer(rqListener);

// http.createServer(function(req, res) {

// });

const server = http.createServer((req, res) => {    //anonymous server since it has no name
    // console.log(req);
    console.log(req.url, req.method, req.headers);
    // process.exit();  not used generally, since it quites the server loop
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>");
    res.write("<p>This is cool.</p>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);