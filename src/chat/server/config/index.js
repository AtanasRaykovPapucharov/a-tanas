module.exports = {
    development: {
        db: 'mongodb://localhost/koa',
        port: 3334
    },
    production: {
        db: 'mongodb://admin:1qazxsw2@ds163060.mlab.com:63060/webdjsdatabase',
        port: process.env.PORT
    }
}