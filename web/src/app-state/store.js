import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducer from './reducers';
import { loadRoutes } from './actions';

/*
 * Standard boilerplate Redux store recipe for creating
 * a Flux-like store.
 */
const middleware = applyMiddleware(
  createLogger({ collapsed: true }),
  thunkMiddleware
);
const store = createStore(appReducer, middleware);
export default store;

// Initialize the store
store.dispatch(loadRoutes());
