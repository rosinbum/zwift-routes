import { AnyAction } from 'redux';
import {
  netClearError,
  netSetError,
  netStartRequest,
  netStopRequest
} from './actions';

/**
 * Type for the network portion of the application state stored in redux.
 */
export type NetworkState = Readonly<{
  /**
   * Number of current network requests
   */
  requests: number;

  /**
   * Last unacknowledged error
   */
  error?: Error;
}>;

const initialState: NetworkState = {
  requests: 0
};

/**
 * Redux reducer for the network portion of the application state.
 * 
 * @param state Current state
 * @param action Action to be performed
 * @returns New state
 */
function reducer(state = initialState, action: AnyAction): NetworkState {
  switch (action.type) {
    case netClearError.type:
      return { ...state, error: undefined };
    case netSetError.type:
      return { ...state, error: action.payload };
    case netStartRequest.type:
      return { ...state, requests: state.requests + 1 };
    case netStopRequest.type:
      return { ...state, requests: state.requests - 1 };
    default:
      return state;
  }
}

export default reducer;
