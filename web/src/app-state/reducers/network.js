const NET_ADDREQUEST = Symbol.for('network.addrequest');
const NET_DELREQUEST = Symbol.for('network.delrequest');
const NET_SETERROR = Symbol.for('network.seterror');
const NET_CLRERROR = Symbol.for('network.clrerror');

export const startNetworkRequest = () => ({
  type: NET_ADDREQUEST
});

export const stopNetworkRequest = () => ({
  type: NET_DELREQUEST
});

export const showNetworkError = (error) => ({
  type: NET_SETERROR,
  error
});

export const clearNetworkError = () => ({
  type: NET_CLRERROR
});

const initialState = {
  requests: 0,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NET_ADDREQUEST:
      return { ...state, requests: state.requests + 1 };
    case NET_DELREQUEST:
      return { ...state, requests: state.requests - 1 };
    case NET_SETERROR:
      return { ...state, error: action.error };
    case NET_CLRERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}
