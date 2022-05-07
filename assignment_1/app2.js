const http = require('http');

const server = http.createServer((req, res) => {
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
        const body = [];                                        // stores all the chunks of data coming through the buffer
        req.on('data', (chunk) => {                             // data function : deals with each chunk of data that node js gives
            console.log(chunk);
            body.push(chunk);                                   // adds the chunks to the body list
        });
        req.on('end', () => {                                   // deals with the accumulated data, turns to human readable
            const parsedBody = Buffer.concat(body).toString();  
            console.log(parsedBody.split('=')[1]);              // splits the value into array on the basis of '=' and gives the value at 1 index = ['username', 'user_input'] i.e. gives just the user_input
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');                         // tells the 'location' for the redirection
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
});
server.listen(3000);