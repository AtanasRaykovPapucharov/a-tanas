'use strict'

const observer = require('./observer')

module.exports = obj => {
    const collection = obj || {}
    const handle = handle => {
        handle.next(collection)
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

            return {
                unsubscribe: () => {
                    subscriber.unsubscribe()
                },
                publish: () => {
                    subscriber.unsubscribe = handle(subscriber)
                }
            }
        }
    }
}
