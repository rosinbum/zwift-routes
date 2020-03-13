import fetch from 'cross-fetch';
import {
  startNetworkRequest,
  stopNetworkRequest,
  showNetworkError
} from '../reducers/network';
import {
  loadRoutesActionCreator,
  completeRoute
} from '../reducers/routes';
import routeServiceClient from '../../services/route-service';

/* eslint-disable no-console */

const ROUTES_URI = `${process.env.PUBLIC_URL}/routes.json`;

/**
 * Load the basic routes structure and user data.  Currently, the routes.json file is on
 * the public endpoint, and the user data is in localStorage.
 */
export default function loadRoutes() {
  return async (dispatch) => {
    try {
      // Load the route database
      dispatch(startNetworkRequest());
      const response = await fetch(ROUTES_URI);
      if (response.status !== 200) {
        throw new Error(`Response returned error code ${response.status} ${response.statusText}`);
      }
      const routes = await response.json();
      dispatch(loadRoutesActionCreator(routes));

      // Load the route state for this user
      const routeStates = await routeServiceClient.loadRouteState();
      routeStates.forEach((item) => {
        // Set isLoading == true so we don't save what we loaded
        dispatch(completeRoute(item.routeId, item.isCompleted, true));
      });

      dispatch(stopNetworkRequest());
    } catch (error) {
      dispatch(stopNetworkRequest());
      dispatch(showNetworkError(error));
      console.error(error);
    }
  };
}
