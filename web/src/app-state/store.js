import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './reducers';
import { loadRoutes } from './actions';

/*
 * Standard boilerplate Redux store recipe for creating
 * a Flux-like store.  Uses the redux-persist version
 * of the boilerplate for persisting only the settings
 * section.
 */
const persistConfig = {
  key: 'settings',
  version: 1,
  storage,
  whitelist: ['settings']
};
const persistedReducer = persistReducer(persistConfig, appReducer);
const middleware = applyMiddleware(
  createLogger({ collapsed: true }),
  thunkMiddleware
);
const store = createStore(persistedReducer, middleware);
export default store;
export const persistor = persistStore(store);

// Initialize the store
store.dispatch(loadRoutes());
