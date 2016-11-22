import React, { Component, PropTypes  }  from 'react'
import Article from './Article'
import AccordionArticle from '../decorators/AccordionArticle'


const ArticleList = props => {
  const { articles, openArticle, openArticleId, prevArticleId } = props

  const articleItems = articles.map(article => (
    <li key = {article.id}>
      <Article
        article = {article}
        isOpen = {article.id === openArticleId && openArticleId !== prevArticleId}
        toggleOpen = {openArticle(article.id)}
      />
    </li>
  ))

  return (
    <ul>
      {articleItems}
    </ul>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  openArticle: PropTypes.func.isRequired,
  openArticleId: PropTypes.string,
  prevArticleId: PropTypes.string
}

export default AccordionArticle(ArticleList)