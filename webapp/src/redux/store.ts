import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers';

/**
 * Create the Redux store.
 */
const store = configureStore({
  reducer: appReducer
});

export default store;
