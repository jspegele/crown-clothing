import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)
