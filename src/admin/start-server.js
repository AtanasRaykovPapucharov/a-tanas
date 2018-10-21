module.exports = (() => {
    const env = process.env.NODE_ENV || 'development'
    const params = require('./config')[env]

    const Koa = require('koa')
    const server = new Koa()

    const KoaRouter = require('koa-router')
    const router = new KoaRouter()

    require('./config/koa')(server, router)

    const Mongoose = require('mongoose')
    const dbConnection = params.db
    const dbCollections = ['blog', 'video', 'user']
    const data = require('./config/mongoose')(Mongoose, dbConnection, dbCollections)

    const controller = require('./config/controller')(data, dbCollections)

    require('./config/routes')(router, controller, dbCollections)

    const port = params.port
    server.listen(port, () => console.log(`Server is running on port: ${port}`))
})()