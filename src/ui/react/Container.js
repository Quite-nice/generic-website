import React, { Component } from 'react'
import _ from 'lodash'
import md5 from 'md5'

import Head from './Head'
import Plugin from './Plugin'
import Section from './Section'
import Contact from './Contact'

export default class Container extends Component {
  renderHead() {
    return <Head head={this.props.generic.head} />
  }

  renderContact() {
    const { generic } = this.props
    if (generic.contact) return <Contact contact={generic.contact} />
    return null
  }

  renderSectionsAndPlugins () {
    console.log('hello')

    const { generic } = this.props
    if (!generic.sections) return null
    return generic.sections
      .sort((a, b) => parseInt(a.rank) > parseInt(b.rank))
      .map((s) => <Section content={s} key={`${md5(JSON.stringify(s))}`} />)
  }

  render() {
    return (
      <div>
        {this.renderHead()}
        <div>{this.renderSectionsAndPlugins()}</div>
        {this.renderContact()}
      </div>
    )
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
    contact: React.PropTypes.shape({
      mail: React.PropTypes.string,
      facebook: React.PropTypes.string,
      twitter: React.PropTypes.string,
      github: React.PropTypes.string,
    }),
    style: React.PropTypes.shape({
      accentColor: React.PropTypes.string,
      theme: React.PropTypes.string,
    }),
    sections: React.PropTypes.array,
    plugins: React.PropTypes.arrayOf(React.PropTypes.shape({
      rank: React.PropTypes.number.isRequired,
      component: React.PropTypes.string.isRequired,
    })),
  }).isRequired
}

Container.defaultProps = {
  generic: {
    style: {
      accentColor: 'grey'
    }
  }
}
