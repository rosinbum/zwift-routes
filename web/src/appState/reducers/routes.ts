import RouteUpdates from 'models/RouteUpdates';
import ZwiftRoute, { ZwiftRouteImpl, ZwiftRouteInput } from 'models/ZwiftRoute';

export const LOAD_ROUTES  = 'routes.load';
export const UPDATE_ROUTE = 'route.update';

/**
 * The Action Type for the LOAD_ROUTES action.
 */
interface LoadRoutesAction {
  type: string,
  routes: ZwiftRouteInput[]
}

/**
 * The Action Type for the UPDATE_ROUTE action.
 */
interface UpdateRouteAction {
  type: string,
  routeId: string,
  payload: RouteUpdates
}

/**
 * The combined type for all actions hanlded by the Route module.
 */
export type RouteAction = LoadRoutesAction | UpdateRouteAction;

/**
 * The list of initial routes.
 */
const initialState: ZwiftRoute[] = [];

/**
 * 
 * @param state current state
 * @param action the action to be performed
 * @returns the new state
 */
const reducer = (state: ZwiftRoute[] = initialState, action: RouteAction) => {
  switch (action.type) {
    case LOAD_ROUTES: 
      {
        const payload = (action as LoadRoutesAction).routes;
        return payload.map(route => new ZwiftRouteImpl(route));
      }
    case UPDATE_ROUTE:
      {
        const {routeId, payload} = action as UpdateRouteAction;
        return state.map(route => 
          route.id === routeId ? route.updateRoute(payload) : route
        );
      }
    default:
      return state;
  }
};

export default reducer;
