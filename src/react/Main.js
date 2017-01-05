import React from 'react'

import { readJSON } from '../helpers'
import Title from './Title'

export default class Main extends React.Component {
  render() {
    const { generic } = this.props
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{generic.title}</title>
        </head>
        <body>
          <Title>{generic.title}</Title>
        </body>
      </html>
    )
  }
}
