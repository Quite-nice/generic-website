import React from 'react'

export default class Main extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id="generic-website" />
          <script src="http://localhost:3000/bundle.js"/>
        </body>
      </html>
    )
  }
}
