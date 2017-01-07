import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import HTML from './routes/HTML'
import { readJSON } from './helpers'

export default () => {
  const PORT = require('./cli/cmds/deploy').port

  const app = express()

  app.use(express.static('./.generic/dist'))

  app.get('/', (req, res) => {
    res.send(ReactDOM.renderToStaticMarkup(<HTML />))
    res.end()
  })

  app.listen(PORT, () => {
    console.log(`\nyour site is running at 0.0.0.0:${PORT}\n`)
  }).on('error', () => console.log(`\nlooks like port ${PORT} is already occupied, could you try with a different port? (use the -p option)\n`))
}
