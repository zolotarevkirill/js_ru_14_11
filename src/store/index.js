import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = applyMiddleware(logger,randomId)
const store = createStore(reducer, {}, composeEnhancers(enhancer))

window.store = store

export default store