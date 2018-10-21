'use strict'

const store = state => {
    let currentState = state || {}
    const subscribes = []
    const change = (state, action) => {
        if (action) {
            return action.init(state)
        }
    }
    return {
        subscribe(func) {
            subscribes.push(func)
        },
        dispatch(action) {
            const newState = change(currentState, action)
            subscribes.forEach(sub => {
                sub(newState)
            })
            currentState = newState
        },
        getState() {
            return currentState
        }
    }
}

module.exports = {
    createStore(state) {
        return store(state)
    },
    createAction(type, func) {
        return {
            type: type,
            init: func || console.log(`Warning: Empty action init`)
        }
    }
}