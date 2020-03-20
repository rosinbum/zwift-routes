import { FluxAction } from "../../types";
import { ZwiftRoute } from "../../../models";

export enum RouteActionTypes {
  LoadRoutes    = 'route.load-routes',
  UpdateRoute   = 'route.update-route'
};

/**
 * Action creator to load the routes into the redux store.
 * 
 * @param routes the list of routes
 */
export const loadRoutes = (routes: ZwiftRoute[]): FluxAction => ({
  type: RouteActionTypes.LoadRoutes,
  payload: routes
});

/**
 * Action creator to update a route in the redux store.
 * @param route the updated route 
 */
export const updateRoute = (route: ZwiftRoute): FluxAction => ({
  type: RouteActionTypes.UpdateRoute,
  payload: route
});
