import { FluxAction } from 'redux/actions';
import ZwiftRoute from 'models/ZwiftRoute';
import { ROUTES_LOADER, ROUTES_REPLACE } from './actions';

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
function reducer(state = initialState, action: FluxAction): RoutesState {
  switch (action.type) {
    case ROUTES_LOADER:
      return [ ...action.payload ];
    case ROUTES_REPLACE:
      {
        const route = action.payload as ZwiftRoute;
        return state.map((r) => r.id === route.id ? route : r);        
      }
    default:
      return state;
  }
}

export default reducer;
