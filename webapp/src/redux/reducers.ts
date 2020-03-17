import { combineReducers } from 'redux';
import network from './modules/network/reducer';
import routes from './modules/routes/reducer';

/* Combine all the provided reducers into one state object */
const appReducer = combineReducers({
  network,
  routes
});

export default appReducer;

