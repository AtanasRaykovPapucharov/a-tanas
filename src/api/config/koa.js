const path = require('path')
const fs = require('fs')
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../../access.log'), {
    flags: 'a'
})

const morgan = require('koa-morgan')
const cors = require('koa-cors')
const statics = require('koa-static')
const session = require('koa-session')
const passport = require('koa-passport')
const bodyParser = require('koa-bodyparser')

module.exports = (app, router) => {

    // Access Logger Middleware
    app.use(morgan('combined', {
        stream: accessLogStream
    }))

    // Cross-origin ...
    app.use(cors())

    // Static Resources Middleware
    app.use(statics(path.join(__dirname, '../client')))

    // Body Parser Middleware
    app.use(bodyParser())

    // Sessions Middleware
    app.keys = ['secret']
    app.use(session({}, app))

    // Auth Middleware
    app.use(passport.initialize())
    app.use(passport.session())

    // Router Middleware
    app.use(router.routes()).use(router.allowedMethods())
}