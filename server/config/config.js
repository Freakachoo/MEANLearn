var path = require('path')
var rootPath = path.normalize(__dirname + '../../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://freakachoo:freakachoo@ds045704.mongolab.com:45704/heroku_ns1x12p8',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}