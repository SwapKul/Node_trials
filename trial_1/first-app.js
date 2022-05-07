const fs = require('fs') // the fs is for the filesystem module
//console.log("Hello! This is supposed to be the output")
fs.writeFileSync('hello.txt', 'Hello from Node.js.')