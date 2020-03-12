import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MainApplication } from './pages';
import store from './app-state/store';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Application = () => (
  <Provider store={store}>
    <>
      <CssBaseline />
      <MainApplication />
    </>
  </Provider>

);

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
