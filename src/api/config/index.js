module.exports = {
    development: {
        db: 'mongodb://apolon:apolon13@ds131373.mlab.com:31373/portfolio-app' || 'mongodb://localhost/koa-room',
        port: 3333
    },
    production: {
        db: 'mongodb://apolon:apolon13@ds131373.mlab.com:31373/portfolio-app',
        port: process.env.PORT
    }
}