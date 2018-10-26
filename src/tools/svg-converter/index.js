const converter = require('potrace')
const fs = require('fs')

const params = {
    background: '#ffffff',
    color: 'orange',
    threshold: 120
  }

const convert = (pathToImg, name) => {
    converter.trace(pathToImg, (err, svg) => {
        if (err) throw err
        fs.writeFile(`./svg/${name}.svg`, svg, (err)=>{
            if(err) console.log(err)
            else console.log('Image converted!')
        })
    })
}

const name = 'logo'
const pathToImg = './logo.png'

convert(pathToImg, name)