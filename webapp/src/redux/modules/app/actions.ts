import { FluxAction } from '../../types';
import { DisplaySettings, RouteFilter, SortOrder } from '../../../models';

/* Enum to define the action types */
export enum ActionType {
  ClearError   = 'app.clear-error',
  SetDisplay   = 'app.set-display',
  SetError     = 'app.set-error',
  SetFilter    = 'app.set-filter',
  SetSort      = 'app.set-sort',
  StartRequest = 'app.start-request',
  StopRequest  = 'app.stop-request'
}

/** Action creator to acknowledge the error */
export const clearError = (): FluxAction => ({
  type: ActionType.ClearError
});

/**
 * Sets the display settings for the app.
 * @param displaySettings the new display settings
 */
export const setDisplay = (displaySettings: DisplaySettings): FluxAction => ({
  type: ActionType.SetDisplay,
  payload: displaySettings
});

/**
 * Action creator for when a network request has an error
 * @param error the network error
 */
export const setError = (error: Error): FluxAction => ({
  type: ActionType.SetError,
  error
});

/**
 * Action creator to set the filtering used on the route list
 * @param filter the new route filter to use
 */
export const setFilter = (filter: RouteFilter): FluxAction => ({
  type: ActionType.SetFilter,
  payload: filter
});

/**
 * Action creator to set the list sort order.
 * @param sortOrder the new sort order
 */
export const setSort = (sortOrder: SortOrder): FluxAction => ({
  type: ActionType.SetSort,
  payload: sortOrder
});

/** Action creator for when a network request is started */
export const startRequest = (): FluxAction => ({
  type: ActionType.StartRequest
});

/** Action creator for when a network request is finished */
export const stopRequest = (): FluxAction => ({
  type: ActionType.StopRequest
});
