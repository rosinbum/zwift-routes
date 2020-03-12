import { combineReducers } from 'redux';
import routeReducer from './routes';

const appReducer = combineReducers({
  routes: routeReducer
});

export default appReducer;
