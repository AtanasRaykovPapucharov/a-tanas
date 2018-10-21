const fs = require('fs-extra')

module.exports = concatCss

function concatCss(inputDir, outputFile) {
    console.log('New directory checking ...')

    fs.createFileSync(outputFile)
    fs.writeFileSync(outputFile, '')
    let dirs = []
    let files = []

    return readDir(inputDir)
        .then(resp => {
            if (resp.length === 0) {
                return
            }
            resp.forEach(file => {
                if (isDir(inputDir, file)) {
                    dirs.push(file)
                } else {
                    files.push(file)
                }
            })
            return {
                dirs,
                files
            }
        })
        .then((resp) => {
            resp.files.forEach(f => {
                console.log(f)

                readFile(inputDir + '/' + f).then(text => {
                    return appendToFile(outputFile, text)
                })
            })

            resp.dirs.forEach(dir => {
                return concatCss(inputDir + '/' + dir, outputFile)
            })
        })
}

function readDir(dirName) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirName, (err, files) => {
            if (err) {
                reject(err)
            }
            resolve(files)
        })
    })
}

function isDir(dirName, file) {
    return fs.statSync(dirName + '/' + file).isDirectory()
}

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, files) => {
            if (err) reject(err)
            resolve(files)
        })
    })
}

function appendToFile(fileName, text) {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, text, (err) => {
            if (err) reject(err)
            resolve(console.log('Text appended!'))
        })
    })
}