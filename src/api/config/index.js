const constants = require('./constants.json')

module.exports = {
    development: {
        db: constants.db || 'mongodb://localhost/koa-room',
        port: 3333
    },
    production: {
        db: constants.db,
        port: process.env.PORT
    }
}