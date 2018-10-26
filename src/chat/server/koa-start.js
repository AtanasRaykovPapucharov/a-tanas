module.exports = (() => {
    const environment = process.env.NODE_ENV || 'development'
    const env = require('./config')[environment]

    const Koa = require('koa')
    const IO = require('koa-socket-2')

    const app = new Koa()
    const io = new IO()
    const db = require('./db')

    require('./config/koa')(app, io, db)

    app.listen(env.port, () => {
        console.log(`CHAT Server is running on port: ${env.port}`)
    })
})()