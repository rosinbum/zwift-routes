import { FluxAction } from 'redux/actions';
import {
  NET_CLEAR_ERROR,
  NET_SET_ERROR,
  NET_START_REQUEST,
  NET_STOP_REQUEST
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
function reducer(state = initialState, action: FluxAction): NetworkState {
  switch (action.type) {
    case NET_CLEAR_ERROR:
      return { ...state, error: undefined };
    case NET_SET_ERROR:
      return { ...state, error: action.error };
    case NET_START_REQUEST:
      return { ...state, requests: state.requests + 1 };
    case NET_STOP_REQUEST:
      return { ...state, requests: state.requests - 1 };
    default:
      return state;
  }
}

export default reducer;
