import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducer from './reducers';

const loggerMiddleware = createLogger({ collapsed: true });
const reduxStore = createStore(
  appReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

export default reduxStore;
