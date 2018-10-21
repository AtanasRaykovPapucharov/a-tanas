const morgan = require('koa-morgan')
const statics = require('koa-static')
const session = require('koa-session')
const passport = require('koa-passport')

const path = require('path')
const fs = require('fs')
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../../access.log'), {
    flags: 'a'
})

module.exports = (app, io, db) => {

    // Access Logger Middleware
    app.use(morgan('combined', {
        stream: accessLogStream
    }))

    // Statics Middleware
    app.use(statics(path.join(__dirname, '../../public/src/')))

    require('./socket')(app, io, db)

    // Sessions Middleware
    app.keys = ['secret']
    app.use(session({}, app))

    // Auth Middleware
    app.use(passport.initialize())
    app.use(passport.session())
}