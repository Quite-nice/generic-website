import fs from 'fs'

module.exports = {
  test: function() {
  let dir = require.main.filename.split('/')
  dir[dir.length - 1] = '.gwrc'
  dir = dir.join('/')

  console.log(JSON.parse(fs.readFileSync(dir)))
}
}
