const Queue = require('../../src/tools/abstract/queue')

module.exports = (expect) => {
    let queue

    describe("It tests Queue", () => {

        beforeEach(() => {
            queue = Queue()
        })

        it(".isEmpty() returns correctly", () => {
            const value = true

            expect(value).to.eql(queue.isEmpty())
        })

        it(".count() returns correctly", () => {
            const value = 0

            const countQueue = queue.count()

            expect(value).to.eql(countQueue)
        })

        it(".enqueue add element", () => {
            const count = 3

            const value = 42

            queue.enqueue(value)
            queue.enqueue(value)
            queue.enqueue(value)

            const countQueue = queue.count()

            expect(count).to.eql(countQueue)
        })

        it(".dequeue returns correctly", () => {
            const value = 42

            queue.enqueue(value)

            const elementValue = queue.dequeue()

            expect(value).eql(elementValue)
        })

        it(".first returns correctly", () => {
            const value = 42
            const value1 = 43
            const value2 = 44

            queue
                .enqueue(value)
                .enqueue(value1)
                .enqueue(value2)

            const first = queue.first()

            expect(value).to.eql(first)
        })

        it(".last returns correctly", () => {
            const value = 42
            const value1 = 43
            const value2 = 44

            queue
                .enqueue(value)
                .enqueue(value1)
                .enqueue(value2)

            const last = queue.last()

            expect(value2).to.eql(last)
        })
    })
}