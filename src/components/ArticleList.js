import React  from 'react'
import Article from './Article'

function ArticleList(props) {
    const { articles } = props

    const articleItems = articles.map(article => <div key = {article.id}><Article article = {article} /></div>)

    return (
        <div>
            {articleItems}
        </div>
    )
}

export default ArticleList