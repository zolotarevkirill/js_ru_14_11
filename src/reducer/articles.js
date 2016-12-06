import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { articles } from '../fixtures'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return acc.set(article.id, article)
}, new Map({}))



export default (articlesState = defaultArticles, action) => {
    const { type, payload, randomId } = action



    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(articles => payload.articleId != articles.id)
        
       		case ADD_COMMENT:
       		articlesState.getIn([payload.articleId]).comments.push(randomId)
      		return articlesState
    }

    return articlesState 
} 

   