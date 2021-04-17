import { createStore, applyMiddleware, compose } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const middleware = [thunk, logger]
const middleware = [thunk]

const configureStore = initialState => {
  let enhancer = composeEnhancers(applyMiddleware(...middleware))
  return createStore(rootReducer, initialState, enhancer)
}

const store = configureStore()
export default store
