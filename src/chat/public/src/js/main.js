const Observable = require('rxjs').Observable
const Subject = require('rxjs').Subject
const $ = require('jquery')
const Handlebars = require('handlebars')
const Navigo = require('navigo')

$(() => {
    const view = require('./view')($, Handlebars)
    const appRouter = new Navigo(null, true)
    appRouter
        .on({
            '/chat': () => {
                return view.chat('#main-section')
                    .then((res) => {
                        return require('./chat-rx')(Observable, Subject, $)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            '/': () => {
                appRouter.navigate('/chat')
            },
            '*': () => {
                appRouter.navigate('/chat')
            }
        })
        .notFound(() => {
            alert('Error! Router not found!')
        })
        .resolve()
})