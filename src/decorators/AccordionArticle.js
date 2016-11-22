import React from 'react'


export default (Component) => class Accordion extends React.Component {
  state = {
    prevArticleId: null,
    openArticleId: null
  }

  openArticle = id => ev => {
    const { openArticleId, prevArticleId } = this.state

    this.setState({
      openArticleId: id,
      prevArticleId: openArticleId === prevArticleId ? null : openArticleId
    })
  }

  render() {
    return <Component {...this.props} {...this.state} openArticle={this.openArticle}/>
  }
}