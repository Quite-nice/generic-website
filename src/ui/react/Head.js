import React, { Component } from 'react'

export default class Head extends Component {
  render() {
    const { head } = this.props
    return (
      <div className="text-center" >
        <Title>{head.title}</Title>
        {head.subtitle?
          <SubTitle>{head.subtitle}</SubTitle>: null
        }
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
    return (
      <h1 style={{
        letterSpacing: '-2px',
        fontSize: '6em',
        fontFamily: 'sans-serif'
      }}>
        <em>{this.props.children.toUpperCase()}</em>
      </h1>
    )
  }
}

class SubTitle extends Component {
  render () {
    return (
        <p className="lead">
          {this.props.children.toLowerCase()}
        </p>
    )
  }
}
