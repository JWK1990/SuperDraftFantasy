import {applyMiddleware, combineReducers, createStore} from 'redux';
import rootReducer, {draftReducer, authenticationReducer} from './reducers';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export default function configureStore(preloadedState) {
    const middlewares = [thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}
