import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import search from './state/search'
import stops, {fetchStops} from './state/stops'
import lines, {fetchLines} from './state/lines'
import stopNames, {fetchStopNames} from './state/stopNames'

const reducer = combineReducers({
    search,
    stops,
    lines,
    stopNames
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // persistState([]),
)

const store = createStore(
    reducer,
    enhancer
)

store.dispatch(fetchStops());
store.dispatch(fetchLines());
store.dispatch(fetchStopNames());

export default store