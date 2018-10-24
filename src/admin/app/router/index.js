module.exports.api = (app, data, collection) => {
    const db = data[collection]
    app
        .get(`/api/${collection}`, (req, res) => {
            db.getAll()
                .then((data) => {
                    res.send({
                        data: data
                    })
                })
        })
        .get(`/api/${collection}/:id`, (req, res) => {
            let id = req.params.id
            db.getById(id)
                .then((data) => {
                    res.send({
                        data: data
                    })
                })
        })
        .post(`/api/${collection}`, (req, res) => {
            let dataObj = req.body
            db.post(dataObj)
                .then((data) => {
                    res.send({
                        data: data
                    })
                })
        })
}

module.exports.view = (app, view) => {
    app
        .get("/home", view.home)
        .get("/admin", view.admin)
        .get("*", (req, res) => {
            res.redirect("/home")
        })
}