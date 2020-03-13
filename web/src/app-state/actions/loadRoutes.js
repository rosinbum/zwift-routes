import fetch from 'cross-fetch';
import {
  startNetworkRequest,
  stopNetworkRequest,
  showNetworkError
} from '../reducers/network';
import { loadRoutesActionCreator } from '../reducers/routes';

/* eslint-disable no-console */

const ROUTES_URI = `${process.env.PUBLIC_URL}/routes.json`;

/**
 * Load the basic routes structure and user data.  Currently, the routes.json file is on
 * the public endpoint, and the user data is in localStorage.
 */
export default function loadRoutes() {
  return async (dispatch) => {
    try {
      dispatch(startNetworkRequest());
      const response = await fetch(ROUTES_URI);
      if (response.status !== 200) {
        throw new Error(`Response returned error code ${response.status} ${response.statusText}`);
      }
      const routes = await response.json();
      console.debug(routes);
      dispatch(stopNetworkRequest());
      dispatch(loadRoutesActionCreator(routes));
    } catch (error) {
      dispatch(stopNetworkRequest());
      dispatch(showNetworkError(error));
      console.error(error);
    }
  };
}
