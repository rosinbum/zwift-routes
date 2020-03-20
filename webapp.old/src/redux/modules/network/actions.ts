import { FluxAction } from 'redux/actions';

/* Constants for the action types */
export const NET_START_REQUEST = 'network.start-request';
export const NET_STOP_REQUEST  = 'network.stop-request';
export const NET_SET_ERROR     = 'network.set-error';
export const NET_CLEAR_ERROR   = 'network.clear-error';

/**
 * Action creator to dispatch when a network request is started.
 */
export const netStartRequest = (): FluxAction => ({ 
  type: NET_START_REQUEST 
});

/**
 * Action creator to dispatch when a network request is stopped.
 */
export const netStopRequest = (): FluxAction => ({
  type: NET_STOP_REQUEST
});

/**
 * Action creator to dispatch when a network error happens.
 * 
 * @param error The last error
 */
export const netSetError = (error: Error): FluxAction => ({
  type: NET_SET_ERROR,
  error
});

/**
 * Action creator to dispatch when a network error is acknowledged.
 */
export const netClearError = (): FluxAction => ({
  type: NET_CLEAR_ERROR
});
