import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducer from './reducers';
import { loadRoutes } from './actions/loadRoutes';

const loggerMiddleware = createLogger({ collapsed: true });
const reduxStore = createStore(
  appReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

reduxStore.dispatch(loadRoutes());

export default reduxStore;
