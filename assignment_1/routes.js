const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write("<html>");
        res.write("<head><title>Project 1</title></head>");
        res.write("<body><h1>Welcome to my project landing page</h1></body>");
        res.write("<form action='/create-user' method='POST'><input type='text' name='username' placeholder='Enter Your Username'>");
        res.write("<button type='submit'>Submit</button></form>");
        res.write('<a href="/users" style="color:black; text-decoration:none">click here for the users list</a>');
        res.write("</html>");
        return res.end();
    }
    if (url === '/create-user' && method ==='POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    if (url === '/users') {
        res.write("<html>");
        res.write("<head><title>Project 1</title></head>");
        res.write("<body>");
        res.write('<ul><li>Adam</li>');
        res.write('<li>Sean</li>');
        res.write('<li>Charles</li>');
        res.write('<li>Jack</li>');
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
}

module.exports = requestHandler;