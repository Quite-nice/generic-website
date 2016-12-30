module.exports = () => {
  let dir = require.main.filename.split('/')
  dir[dir.length - 1] = '.gwrc'

  console.log(dir.join('/'))
}
