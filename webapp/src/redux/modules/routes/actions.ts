import { createAction } from '@reduxjs/toolkit';
import ZwiftRoute from 'models/ZwiftRoute';

/* Constants for the action types */
export const ROUTES_LOADER = 'routes.loader';
export const ROUTES_REPLACE = 'routes.replace';

/**
 * Action creator to load the routes into the redux store.
 * 
 * @param routes The routes list.
 */
export const routesLoader = createAction<ZwiftRoute[]>(ROUTES_LOADER);

/**
 * Action creator to mark a route as complete
 * 
 * @param routeId The route ID
 */
export const replaceRoute = createAction<ZwiftRoute>(ROUTES_REPLACE);
