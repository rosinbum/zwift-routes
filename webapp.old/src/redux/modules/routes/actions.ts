import { FluxAction } from 'redux/actions';
import ZwiftRoute from 'models/ZwiftRoute';

/* Constants for the action types */
export const ROUTES_LOADER = 'routes.loader';
export const ROUTES_REPLACE = 'routes.replace';

/**
 * Action creator to load the routes into the redux store.
 * 
 * @param routes The routes list.
 */
export const routesLoader = (routes: ZwiftRoute[]): FluxAction => ({
  type: ROUTES_LOADER,
  payload: routes
});

/**
 * Action creator to mark a route as complete
 * 
 * @param routeId The route ID
 */
export const replaceRoute = (route: ZwiftRoute): FluxAction => ({
  type: ROUTES_REPLACE,
  payload: route
});
