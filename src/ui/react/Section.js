import React, { Component } from 'react'

export default class Section extends Component {
  renderElements() {
    return 'hello elements'
  }

  render () {
    const { content } = this.props

    return (
      <div className="text-center" style={{backgroundColor: content.color}}>
        {content.title?<h1>{content.title.toUpperCase()}</h1>: null}
        {content.description? <p>{content.description}</p>: null}
        {content.elements? <div>{this.renderElements()}</div>: null}
      </div>
    )
  }
}

/**
 * Everything here is optional as a section should be as flexible as possible.
 * Some sections contain only elements, some contain a quote or description, ...
 * The only thing locked is their apperance and location in this container.
 */
Section.proptTypes = {
  content: React.PropTypes.shape({
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    color: React.PropTypes.string,
    elements: React.PropTypes.arrayOf(React.PropTypes.shape({
        title: React.PropTypes.string,
        logo: React.PropTypes.string,
        link: React.PropTypes.string,
        alt: React.PropTypes.string
      })
    )
  }).isRequired
}

Section.defaultProps = {
  content: {
    color: 'grey'
  }
}
