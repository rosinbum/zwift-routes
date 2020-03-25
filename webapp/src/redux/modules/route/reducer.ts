import { FluxAction } from 'src/redux/types';
import { RouteActionTypes } from './actions';
import RouteState from "./state";
import { ZwiftRoute } from 'src/models';

/* Initial state for the redux store */
const initialState: RouteState = [];

/**
 * Redux reducer for the routes module.
 * 
 * @param state current state
 * @param action action to be performed
 * @returns new state
 */
function reducer(state = initialState, action: FluxAction): RouteState {
  switch (action.type) {
    case RouteActionTypes.LoadRoutes:
      return [ ...action.payload ];
    case RouteActionTypes.UpdateRoute: {
      const route = action.payload as ZwiftRoute;
      return state.map((r) => r.id === route.id ? route : r);
    }
    default:
      return state;
  }
}

export default reducer;
