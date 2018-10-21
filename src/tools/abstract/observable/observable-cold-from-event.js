'use strict'

const observer = require('./observer')

module.exports = (target, event) => {
    const handle = handle => {
        return target.addEventListener(event, e => {
            handle.next(e)
            handle.complete()
        })
    }

    return {
        subscribe(func) {
            const subscriber = observer({
                next: func
            })

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