import { combineReducers } from 'redux';
import routeReducer from './routes';
import settingsReducer from './settings';

export default combineReducers({
  routes: routeReducer,
  settings: settingsReducer
});
