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
        }
    }
}