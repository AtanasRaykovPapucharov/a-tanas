module.exports = (mongo) => {
    return {
        home: (req, res, next) => {
            res.render("./options/home", {
                data: {},
                tag: "home"
            })
        },
        admin: (req, res, next) => {
            res.render("./options/admin", {

            })
        },
        blog: (req, res, next) => {
            res.render("./options/blog", {

            })
        },
        video: (req, res, next) => {
            res.render("./options/video", {

            })
        },
        user: (req, res, next) => {
            res.render("./options/users", {

            })
        }
    }
}