import { articles } from '../fixtures'
import { DELETE_ARTICLE, SET_DATE_FILTER, SET_TITLE_FILTER } from '../constants'

export default (articlesState = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id != payload.articleId)
//это дополнительная сложность + потенциальная неконсистентность. лучше проводить фильтрацию по месту использования
        case SET_DATE_FILTER:
            const { from, to } = payload

            return articlesState.map(article => {
                const date = new Date(article.date)
                let show = true

                if (from) {
                    show = date >= from
                }

                if (from && to) {
                    show = date >= from && date <= to
                }

                return {...article, show}
            })
        case SET_TITLE_FILTER:
            const { articleId } =  payload
            return articlesState.map(article => {
                if (!articleId) {
                    return {...article, show: true, selected: false}
                }

                let show = article.id === articleId
                return {...article, show, selected: show}
            })
    }

    return articlesState
}
