import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import dateReducer from './date'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    date: dateReducer
})