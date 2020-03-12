import { combineReducers } from 'redux';
import routeReducer from './routes';

export default combineReducers({
  routes: routeReducer
});
