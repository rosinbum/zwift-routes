import fetch from 'cross-fetch';
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
      const response = await fetch(ROUTES_URI);
      console.debug(response);
      if (response.status !== 200) {
        throw new Error(`Response returned error code ${response.status} ${response.statusText}`);
      }
      const routes = await response.json();
      console.debug(routes);
      dispatch(loadRoutesActionCreator(routes));
    } catch (error) {
      console.error(error);
    }
  };
}
