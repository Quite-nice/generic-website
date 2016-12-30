import React from 'react'

import { getRCJson } from '../helpers'
import Title from './Title'

export default class Main extends React.Component {
  render() {
    const params = getRCJson()

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />          
          <title>{params.title}</title>
        </head>
        <body>
          <Title>{params.title}</Title>
        </body>
      </html>
    )
  }
}
