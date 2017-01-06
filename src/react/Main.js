import React from 'react'

import { readJSON } from '../helpers'
import Title from './Title'

export default class Main extends React.Component {
  render() {
    const { head } = this.props.generic
    console.log(this.props.generic)
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{head.title}</title>
        </head>
        <body>
          <Title>{head.title}</Title>
        </body>
      </html>
    )
  }
}

Main.propTypes = {
  generic: React.PropTypes.shape({
    // Required
    head: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,

      subtitle: React.PropTypes.string,
      description: React.PropTypes.string,
    }).isRequired,

    // Optional
    constact: React.PropTypes.shape({
      mail: React.PropTypes.string,
      facebook: React.PropTypes.string,
      twitter: React.PropTypes.string,
      github: React.PropTypes.string,
    }),
    style: React.PropTypes.shape({
      accentColor: React.PropTypes.string,
      theme: React.PropTypes.string,
    }),
    sections: React.PropTypes.arrayOf(React.PropTypes.shape({
      rank: React.PropTypes.number.isRequired,

      title: React.PropTypes.string,
      description: React.PropTypes.string,
      color: React.PropTypes.string,
    })),
    plugins: React.PropTypes.arrayOf(React.PropTypes.shape({
      rank: React.PropTypes.number.isRequired,
      component: React.PropTypes.string.isRequired,
    })),
  }).isRequired
}

Main.defaultProps = {
  style: {
    accentColor: 'grey',
  }
}
