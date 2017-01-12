import React from 'react'

export default class Main extends React.Component {
  render() {
    return (
      <html lang="en" style={{height: '100%'}} >
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        </head>
        <body style={{height: '100%'}} >
          <div id="generic-website" />
          <script src="http://localhost:3000/bundle.js"/>
        </body>
      </html>
    )
  }
}
