module.exports.api = (app, data, collection) => {
    const db = data[collection]
    app
        .get(`/api/${collection}`, (req, res) => {
            db.getAll()
                .then((data) => {
                    res.json({
                        data: data
                    })
                })
                .catch((err) => {
                    res
                        .status(400)
                })
        })
        .get(`/api/${collection}/:id`, (req, res) => {
            let id = req.params.id
            db.getById(id)
                .then((data) => {
                    res.json({
                        data: data
                    })
                })
                .catch((err) => {
                    res
                        .status(400)
                })
        })
        .get(`/api/${collection}/:section`, (req, res) => {
            let section = req.params.section
            db.getBySection(section)
                .then((data) => {
                    res.json({
                        data: data
                    })
                })
                .catch((err) => {
                    res
                        .status(400)
                })
        })
        .post(`/api/${collection}`, (req, res) => {
            let dataObj = req.body
            dataObj.date = new Date()

            db.post(dataObj)
                .then((data) => {
                    res
                        .status(200)
                        .json({
                            data: data
                        })
                        .redirect(`/${collection}`)
                })
                .catch((err) => {
                    res
                        .status(400)
                })
        })
}

module.exports.view = (app, view) => {
    app
        .get("/home", view.home)
        .get("/admin", view.admin)
        .get("/blog", view.blog)
        .get("/video", view.video)
        .get("/user", view.user)
        .get("*", (req, res) => {
            res.redirect("/home")
        })
}