import { NetworkState } from 'models';
import { 
  NetworkAction,
  NetworkErrorAction,
  constants
} from '../actions/network';

const initialState: NetworkState = {
  requests: 0,
  error: null
};

export default function reducer(state = initialState, action: NetworkAction): NetworkState {
  switch (action.type) {
    case constants.NETWORK_START_REQUEST:
      return { ...state, requests: state.requests + 1 };
    case constants.NETWORK_STOP_REQUEST:
      return { ...state, requests: state.requests - 1 };
    case constants.NETWORK_SET_ERROR: {
        const error = (action as NetworkErrorAction).error;
        return { ...state, error };
      }
    case constants.NETWORK_CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}
