import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './modules/app/reducer';
import routeReducer from './modules/route/reducer';
import * as actions from './actions';
import { routeService } from 'src/services';

/* Configuration for redux-persist */
const persistConfig = {
  key: 'settings',
  storage,
  whitelist: [ 'display', 'filter', 'sortOrder' ]
};
const rootReducer = combineReducers({
  app: persistReducer(persistConfig, appReducer),
  routes: routeReducer
});

/* Configure redux middleware */
const loggerConfiguration = {
  collapsed: true,
  diff: true, 
  // Log only if not testing
  predicate: () => (typeof jest === 'undefined')
};

/* Apply Middleware to the store */
const middleware = applyMiddleware(
  createLogger(loggerConfiguration)
);

/* Create the redux store */
export const store = compose(middleware)(createStore)(rootReducer);
export const persistor = persistStore(store);

/* Dispatch initialization actions - ignore for code coverage */
store.dispatch(actions.startRequest());
routeService.getAllZwiftRoutes().then((routes) => {
  store.dispatch(actions.loadRoutes(routes));
  store.dispatch(actions.stopRequest());
  return;
}).catch((error) => {
  store.dispatch(actions.setError(error));
});
