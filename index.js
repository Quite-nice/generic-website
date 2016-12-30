module.exports = {
  test: function () {
    var dir = require.main.filename.split('/')
    dir[dir.length - 1] = '.gwrc'

    console.log(dir.join('/'))
  }
}
