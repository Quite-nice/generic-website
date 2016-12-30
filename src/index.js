import React from 'react'
import ReactDOM from 'react-dom/server'

import Main from './react/Main'

module.exports = () => ReactDOM.renderToStaticMarkup(<Main />)

module.exports.getRCJson = require('./helpers').getRCJson
