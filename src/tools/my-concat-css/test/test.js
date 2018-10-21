'use strict'
const fs = require('fs')
const chai = require('chai')
const expect = chai.expect

let concatCss = require('../my-concat-css')
const inputDir = './test/css'
const outputFile = 'bundle.css'
const sampleData = 'body,body *{margin:0;padding:0}body a,body * a{text-decoration:none;color:#fff}'

describe('Concat CSS module testing bundle.css is created', () => {

    it('so after concatCss(inputDir, outputFile), there is created a bundle.css file', done => {
        concatCss(inputDir, outputFile)
        fs.readdir('./', (err, dirs) => {
            if (!err) {
                expect(dirs.includes(outputFile)).to.be.true
            }
            done()
        })
    })
})

describe('Concat CSS module testing is written data correct', () => {

    before(done => {
        fs.unlinkSync(outputFile)
        done()
    })

    it('so after concatCss(inputDir, outputFile) and read bundle.css result includes sample data', done => {
        fs.readFile('bundle.css', 'utf8', (err, fileData) => {
            if (!err) {
                const isTheSameData = fileData.includes(sampleData)
                expect(isTheSameData).to.be.true
            }
            done()
        })
    })
})