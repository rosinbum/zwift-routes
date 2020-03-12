import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Loading, MainApplication } from './pages';
import store, { persistor } from './app-state/store';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Application = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <>
        <CssBaseline />
        <MainApplication />
      </>
    </PersistGate>
  </Provider>

);

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
