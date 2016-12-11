import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import podcasts from './podcasts';

const rootReducer = combineReducers({ podcasts, routing: routerReducer });

export default rootReducer;
