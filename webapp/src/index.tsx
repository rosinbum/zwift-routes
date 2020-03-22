import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { LoadingOverlay } from 'src/ui/components';
import { MainApplication } from 'src/ui/containers';
import { persistor, store } from 'src/redux/store';
import * as serviceWorker from 'src/serviceWorker';

import './index.css';

const Application: React.SFC<{}> = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingOverlay />} persistor={persistor}>
      <MainApplication />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
