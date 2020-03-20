import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './reducers';

/**
 * The configuration for redux-persist, to persist the settings to 
 * backing store.
 */
const persistConfig = {
  key: 'settings',
  storage,
  whitelist: [ 'settings' ]
};
const persistedReducer = persistReducer(persistConfig, appReducer);

/**
 * Middleware.
 */
const middlewares = [];
if (!jest) {
  // Only turn on the logger if you need it
  middlewares.push(createLogger({ collapsed: true }));
}
const middleware = applyMiddleware(...middlewares);

/**
 * Create the Redux store.
 */
const store = compose(middleware)(createStore)(persistedReducer);
export const persistor = persistStore(store);

export default store;
