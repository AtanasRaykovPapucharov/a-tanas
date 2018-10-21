module.exports = (data, collections) => {
    let control = {}
    collections.forEach(element => {
        control[element] = require(`../data/${element}/${element}-control`)(data[element])
    })

    return control
}