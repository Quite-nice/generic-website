import React from 'react'
import ReactDOM from 'react-dom'

import Container from './react/Container'

const generic = require('./.generic.json')

ReactDOM.render(<Container {...{generic}}/>, document.getElementById('generic-website'))
