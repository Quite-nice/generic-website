import React, { Component } from 'react'

const urlMap = {
  github: 'https://github.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  mail: 'mailto:',
}

export default class Contact extends Component {
  getContacts() {
    return Object.keys(this.props.contact).map((c) => <ContactElement account={c} />)
  }

  render() {
    return (
      <ul>
        {this.getContacts()}
      </ul>
    )
  }
}

class ContactElement extends Component {
  render() {
    return (
      <div style={{width: '20%'}} >
        <a href={`${urlMap[c]}${this.prps.contact[c]}`} >
          {this.props.contact[c]}
        </a>
      </div>
    )
  }
}

ContactElement.propTypes = {
  account: React.PropTypes.string.isRequired
}
