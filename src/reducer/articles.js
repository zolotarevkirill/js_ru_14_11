import { articles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

export default (articlesState = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
        console.log('!!!',payload.articleId)
            return articlesState.filter(article => article.id != payload.articleId)
    }

    return articlesState
}