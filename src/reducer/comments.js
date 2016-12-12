import {ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToMap, ReducerState} from '../utils'
import {Record} from 'immutable'

const CommentModel = new Record({
    id: 0,
    user: '',
    text: ''
})

const defaultComments = arrayToMap([], CommentModel)

const defaultState = new ReducerState({
    entities: defaultComments,
    loading: false
})

export default (comments = defaultState, action) => {
    const {type, payload, response, error, generatedId} = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: generatedId}))

        case LOAD_ALL_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                .set('entities', arrayToMap(response.records, CommentModel))
                .set('loading', false)
    }

    return comments
}