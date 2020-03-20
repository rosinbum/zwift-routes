import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { LoadingScreen } from 'ui/components';
import MainApplication from 'ui/MainApplication';
import store, { persistor } from './redux/store';
import { routeService } from './services';
import * as actions from 'redux/actions';

// Initialize the store with the route service
store.dispatch(actions.netStartRequest());
routeService.getAllZwiftRoutes().then((routes) => {
  store.dispatch(actions.routesLoader(routes));
  store.dispatch(actions.netStopRequest());
  return;
}).catch((error) => {
  store.dispatch(actions.netStopRequest());
  store.dispatch(actions.netSetError(error));
});

// Provide the wrapper logic for the container app (wiring up any gates
// and the redux store).
const Application: React.SFC<{}> = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <MainApplication />
    </PersistGate>
  </Provider>
);

// Render the application in the browser.
ReactDOM.render(<Application />, document.getElementById('root'));
