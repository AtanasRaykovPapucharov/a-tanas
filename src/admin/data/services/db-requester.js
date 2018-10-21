module.exports = () => {
    function _sendRequest(collection) {
        return {
            getAll: () => {
                return new Promise((resolve, reject) => {
                    collection.find({}, (err, data) => {
                        if (err) {
                            reject(err)
                        }
                        resolve(data)
                    })
                })
            }
        }
    }
    return {
        getAll: (collection) => {
           return _sendRequest(collection).getAll()
        },
        getBy: (collection, prop, value) => {},
        post: (collection, obj) => {},
        update: (collection, id, prop, value) => {},
        delete: (collection, id) => {}
    }
}