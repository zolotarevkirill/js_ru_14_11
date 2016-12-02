import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { articles } from '../fixtures'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return acc.set(article.id, article)
}, new Map({}))



export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action



    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(articles => payload.articleId != articles.id)
        	
    }

    return articlesState
} 

   