import ZwiftRoute from '../models/ZwiftRoute';

const LOAD_ROUTES_ACTION = Symbol.for('route.loadRoutes');
const UPDATE_ROUTE_ACTION = Symbol.for('route.updateRoute');

/**
 * Action Creator to dispatch once you have a list of routes.
 * This will update the list of routes with the new routes.
 *
 * @param {ZwiftRoute[]} routes the list of routes to load
 */
export const loadRoutesActionCreator = (routes) => ({
  type: LOAD_ROUTES_ACTION,
  routes
});

/**
 * Action creator to mark or clear a route as completed.
 *
 * @param {string} routeId ID of the route to update
 * @param {*} instructions the update to the route
 */
export const completeRouteActionCreator = (routeId, isCompleted) => ({
  type: UPDATE_ROUTE_ACTION,
  routeId,
  routeUpdate: { isCompleted }
});

/**
 * Redux reducer.  It's job is to return a NEW state (state is immutable)
 * with the required changes.
 *
 * @param {ZwiftRoute[]} state the current state
 * @param {Action} action the action to perform on the state
 * @returns new state
 */
export default function reducer(state = [], action) {
  switch (action.type) {
    case LOAD_ROUTES_ACTION:
      return action.routes.map((route) => new ZwiftRoute(route));
    case UPDATE_ROUTE_ACTION:
      return state.map((r) => (r.id === action.routeId ? r.updateRoute(action.routeUpdate) : r));
    default:
      return state;
  }
}
