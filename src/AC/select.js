import { SET_TITLE_FILTER } from '../constants'

export const select = (articleId)  => ({
    type: SET_TITLE_FILTER,
    payload: {
        articleId
    }
})
