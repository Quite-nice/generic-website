import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import Main from './react/Main'
import { readJSON } from './helpers'

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  const generic = readJSON('./.generic.json')
  res.send(ReactDOM.renderToStaticMarkup(<Main {...{generic}} />))
  res.end()
})

app.listen(PORT, () => {
  console.log(`your site is running at 0.0.0.0:${PORT}`)
})
