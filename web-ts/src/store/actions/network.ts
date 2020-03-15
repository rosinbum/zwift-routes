export interface NetworkAction {
  type: symbol
}

export interface NetworkErrorAction extends NetworkAction {
  error: Error
}

export const constants = {
  NETWORK_START_REQUEST: Symbol.for('network.start_request'),
  NETWORK_STOP_REQUEST: Symbol.for('network.stop_request'),
  NETWORK_SET_ERROR: Symbol.for('network.set_error'),
  NETWORK_CLEAR_ERROR: Symbol.for('network.clear_error')
};

export const startNetworkRequest = (): NetworkAction => ({
  type: constants.NETWORK_START_REQUEST
});

export const stopNetworkRequest = (): NetworkAction => ({
  type: constants.NETWORK_STOP_REQUEST
});

export const setNetworkError = (error: Error): NetworkErrorAction => ({
  type: constants.NETWORK_SET_ERROR,
  error
});

export const clearNetworkError = (): NetworkAction => ({
  type: constants.NETWORK_CLEAR_ERROR
});
