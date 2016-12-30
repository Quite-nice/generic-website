import React from 'react'

import { getRCJson } from '../helpers'

export default class Main extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <title>{getRCJson().title}</title>
        </head>
        <body>
          <div>Hello, World!</div>
        </body>
      </html>
    )
  }
}
