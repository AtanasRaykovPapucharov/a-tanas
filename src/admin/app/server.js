module.exports = {
    init: (() => {
        const express = require('express')
        const app = express()

        const env = process.env.NODE_ENV || 'development'
        const params = require('./config/')[env]

        require('./config/express')(express, app, params)

        const dbConnect = params.db
        const mongo = require("./config/mongo")(dbConnect)

        const views = require('./views')(mongo)

        const nodemailer = require('./config/nodemailer')(params)

        const data = require('./data')(mongo)

        const COLLECTION = {
            VIDEO: 'video',
            BLOG: 'blog'
        }

        require('./router').api(app, data, COLLECTION.VIDEO)
        require('./router').api(app, data, COLLECTION.BLOG)
        require('./router').view(app, views)
        
        const port = params.port
        app.listen(port)
        console.log(`ADMIN Server running on port:${port}`)
    })()
}