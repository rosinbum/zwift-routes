import AppState from './modules/app/state';
import RouteState from './modules/route/state';

/**
 * Defines a Flux Standard Action
 */
export interface FluxAction {
  /** The identifier for the action - required */
  type: string | symbol;

  /** If this action is because of an error, then provide the error */
  error?: Error;

  /** If this action has a payload, then provide the payload */
  payload?: any;
}

/**
 * Defines the Store state
 */
export interface ReduxState {
  app: AppState;
  routes: RouteState;
}
