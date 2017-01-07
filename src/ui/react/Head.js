import React, { Component } from 'react'

export default class Head extends Component {
  render() {
    const { head } = this.props
    return (
      <div>
        <Title>{head.title}</Title>
      </div>
    )
  }
}

Head.proptTypes = {
  head: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,

    logo: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    description: React.PropTypes.string,
  }).isRequired
}

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>
  }
}
