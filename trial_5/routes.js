const fs = require('fs');

// function requestHandler(req, res) {}
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>");
    res.write("<p>This is cool.</p>");
    res.write("</body>");
    res.write("</html>");
    res.end();
};

module.exports = requestHandler;
/*

// alternate #1
module.exports = {
    handler: requestHandler
    someText: 'Some hard coded text'
}

// alternate #2
module.exports.handler = requestHandler
modeule.exports.someText = "Some hard coded text"

// alternate #3
exports.handler = requestHandler
exports.someText = "Some hard coded text"

*/