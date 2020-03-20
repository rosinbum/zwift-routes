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
