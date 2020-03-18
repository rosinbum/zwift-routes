export {
  netClearError,
  netSetError,
  netStartRequest,
  netStopRequest
} from './modules/network/actions';

export {
  routesLoader
} from './modules/routes/actions';

/**
 * The Flux Standard Action type.
 */
export type FluxAction = {
  type: string;
  error?: Error;
  payload?: any;
}
