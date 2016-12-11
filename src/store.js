import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index'

import podcasts from './dummy-data'

const defaultState = {
    podcasts
}

const store = createStore(rootReducer, defaultState)

export default store
