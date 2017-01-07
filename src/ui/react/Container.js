import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return <p>Containerke {this.props.generic.head.title}</p>
  }
}

Container.propTypes = {
  generic: React.PropTypes.shape({
    // Required
    head: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,

      logo: React.PropTypes.string,
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

Container.defaultProps = {
  style: {
    accentColor: 'grey',
  }
}
