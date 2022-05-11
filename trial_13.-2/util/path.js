const path = require('path');

module.exports = path.dirname(require.main.filename);       // gives the dirname the address of the parent folder of 'filename'
// module.exports = path.dirname(process.mainModule.filename);