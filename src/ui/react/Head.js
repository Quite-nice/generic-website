import React, { Component } from 'react'

export default class Head extends Component {
  constructor(props) {
    super(props)
    this.state = {height: this.props.height}
  }

  componentDidMount() {
    this.setState({height: window.innerHeight})
  }

  render() {
    const { head } = this.props
    return (
      <div style={{
        height: `${Math.min(this.state.height, 500)}px`,
        display: 'flex'
      }}>
        <div className="text-center" style={{
          margin: 'auto auto'
        }}>
          <Title>{head.title}</Title>
          {head.subtitle?<SubTitle>{head.subtitle}</SubTitle>: null}
        </div>
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
  }).isRequired,
  height: React.PropTypes.number,
}

Head.defaultProps = {
  height: 500,
}

class Title extends Component {
  render() {
    return (
      <h1 style={{
        letterSpacing: '-2px',
        fontSize: '6em',
        fontFamily: 'sans-serif'
      }}>{this.props.children.toUpperCase()}</h1>
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
