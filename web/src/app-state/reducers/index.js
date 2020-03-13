import { combineReducers } from 'redux';
import networkReducer from './network';
import routeReducer from './routes';
import settingsReducer from './settings';

export default combineReducers({
  network: networkReducer,
  routes: routeReducer,
  settings: settingsReducer
});
