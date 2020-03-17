import { AnyAction } from 'redux';
import ZwiftRoute from 'models/ZwiftRoute';
import { routesLoader, replaceRoute } from './actions';

/**
 * Type for the routes portion of the redux application state store
 */
export type RoutesState = Readonly<ZwiftRoute[]>;

/*
 * Initial State for the store.
 */
const initialState: RoutesState = [];

/**
 * Redux reducer for the routes portion of the application state.
 * 
 * @param state Current state
 * @param action Action to be performed
 * @returns New state
 */
function reducer(state = initialState, action: AnyAction): RoutesState {
  switch (action.type) {
    case routesLoader.type:
      return [ ...action.payload ];
    case replaceRoute.type:
      {
        const route = action.payload as ZwiftRoute;
        return state.map((r) => r.id === route.id ? route : r);        
      }
    default:
      return state;
  }
}

export default reducer;
