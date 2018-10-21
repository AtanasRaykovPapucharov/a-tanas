const queue = () => {
    let dataStore = []
    let amount = 0
    
    return {
        count: () => {
            return amount
        },
        enqueue: function (element) {
            amount += 1
            dataStore.push(element)
            return this
        },
        dequeue: () => {
            amount -= 1
            return dataStore.shift()
        },
        first: () => {
            return dataStore[0]
        },
        last: () => {
            return dataStore[amount - 1]
        },
        isEmpty: () => {
            return amount === 0
        }
    }
}

module.exports = queue