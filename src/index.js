import fs from 'fs'

module.exports = function() {
    console.log(JSON.parse(fs.readFileSync(`${__dirname.split('node_modules')[0]}/.gwrc`)))
    return 'hello, world'
  }

module.exports.getRCJson = () => JSON.parse(fs.readFileSync(`${__dirname.split('node_modules')[0]}/.gwrc`))
