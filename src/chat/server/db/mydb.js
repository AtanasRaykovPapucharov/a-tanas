module.exports = (() => {
    const fs = require("fs")
    const dir = require("path").normalize(__dirname + "/storage")
    function getJSON(path, callback) {
        return fs.readFile(path, "utf8", (err, file) => {
            if (err) throw err
            callback(JSON.parse(file))
        })
    }
    function saveJSON(path, json) {
        if (typeof (json) != String) {
            json = JSON.stringify(json)
        }
        return fs.writeFile(path, json, "utf8", (err, resp) => {
            if (err) throw err
            if (resp) return resp
        })
    }
    function getPath(collection) {
        return dir + "/" + collection + ".json"
    }
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
    return {
        init: collections => {
            collections = collections || ["objects"]
            if (typeof (collections) == "string") {
                collections = [collections]
            }
            fs.readdir(dir, (err, files) => {
                if (err) throw err
                for (let i = 0; i < collections.length; ++i) {
                    if (!files.includes(collections[i] + ".json")) {
                        saveJSON(getPath(collections[i]), { all: [] })
                    }
                }
            });
        },
        count: callback => {
            fs.readdir(dir, (err, files) => {
                if (err) throw err
                callback(files)
            });
        },
        length: (collection, callback) => {
            getJSON(getPath(collection), (data) => {
                callback(data.all.length)
            })
        },
        getAll: (collection, callback) => {
            getJSON(getPath(collection), (data) => {
                callback(data.all)
            })
        },
        getById: (collection, id, callback) => {
            getJSON(getPath(collection), (data) => {
                data = data.all
                for (let i = 0; i < data.length; ++i) {
                    if (id === data[i].id) {
                        callback(data[i])
                        return
                    }
                }
            })
        },
        getByTags: (collection, tags, callback) => {
            tags = tags || []
            let result = []
            getJSON(getPath(collection), (data) => {
                data = data.all
                let isFound = false
                for (let i = 0; i < data.length; ++i) {
                    for (let j = 0; j < tags.length; ++j) {
                        for (let k = 0; k < data[i].tags.length; ++k) {
                            if (tags[j] === data[i].tags[k]) {
                                result.push(data[i])
                                isFound = true
                                break
                            }
                        }
                        if (isFound) {
                            isFound = false
                            break
                        }
                    }
                }
                callback(result)
            })
        },
        save: (collection, obj, callback) => {
            obj = obj || {}
            obj.id = '_' + Math.random().toString(36).substr(2, 13)
            let path = getPath(collection)
            getJSON(path, (data) => {
                data.all.push(obj)
                saveJSON(path, data)
            })
        }
    }
})()