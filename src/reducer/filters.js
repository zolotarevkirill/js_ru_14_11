import { articles } from '../fixtures'
import { CHANGE_SELECT_FILTER } from '../constants'



export default (articlesState = articles, action) => {

	const { type, payload } = action

	console.log('RED-FILTER2');

    switch (type) {
        case CHANGE_SELECT_FILTER:
       			console.log('(!(((',articlesState.filter(article => article.id == payload.ids[0]));
             return articlesState.filter(article => article.id == payload.ids[0])

    }

    return articlesState
}