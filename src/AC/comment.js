import {ADD_COMMENT, LOAD_ALL_COMMENTS} from '../constants'

export function callApiForComments(articleId) {
    console.log('AC-----------------------')
    return {
        type: LOAD_ALL_COMMENTS,
        payload: articleId,
        //лучше было загружать комменты для конкретной статьи, там в чате обсуждали нужный endpoint
        callAPI: '/api/comment'
    }
}


export function addComment(comment, articleId, commentId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId,
            commentId,
            ...comment
        }
    }
}

