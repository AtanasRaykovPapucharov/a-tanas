'use strict'

const observer = require('./observer')

module.exports = obj => {
    const collection = obj || {}

    return {
        subscribe(func) {
            const handle = handle => {
                handle.next(collection)
                handle.complete()
            }

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
