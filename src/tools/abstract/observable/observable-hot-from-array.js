'use strict'

const observer = require('./observer')

module.exports = obj => {
    const collection = obj || {}
    const handle = handle => {
        collection.forEach(element => {
            handle.next(element)
        })

        handle.complete()
    }

    return {
        subscribe(func) {
            const sub = {
                next: func,
                error: err => {
                    console.log(err)
                },
                complete: () => {
                    console.log('completed!')
                }
            }
            const subscriber = observer(sub)
            subscriber.unsubscribe = handle(subscriber)

            return {
                unsubscribe: () => {
                    subscriber.unsubscribe()
                },
                publish: () => {
                    return
                }
            }
        }
    }
}