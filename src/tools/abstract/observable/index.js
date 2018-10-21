const hotObservable = require('./observable-hot')
const coldObservable = require('./observable-cold')
const hotArrayObservable = require('./observable-cold-from-array')
const coldArrayObservable = require('./observable-cold-from-array')
const eventObservableHot = require('./observable-hot-from-event')
const eventObservableCold = require('./observable-cold-from-event')

module.exports = {
    hot: hotObservable,
    cold: coldObservable,
    hotFromArray: hotArrayObservable,
    coldFromArray: coldArrayObservable,
    hotFromEvent: eventObservableHot,
    coldFromEvent: eventObservableCold
}