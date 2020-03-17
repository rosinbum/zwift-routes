import { combineReducers } from 'redux';
import network from './modules/network/reducer';

/* Combine all the provided reducers into one state object */
const appReducer = combineReducers({
  network
});

export default appReducer;

