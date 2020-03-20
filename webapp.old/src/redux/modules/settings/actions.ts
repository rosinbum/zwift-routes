import { FluxAction } from 'redux/actions';
import RouteFilter from 'models/RouteFilter';
import SortOrder from 'models/SortOrder';
import DisplayUnits from 'models/DisplayUnits';

/* Constants for the action types */
export const SETTINGS_FILTER  = 'settings.set-filter';
export const SETTINGS_SORT    = 'settings.set-sort';
export const SETTINGS_DISPLAY = 'settings.set-display';

/**
 * Action creator to dispatch to change the route filter
 */
export const setRouteFilter = (filter: RouteFilter): FluxAction => ({
  type: SETTINGS_FILTER,
  payload: filter
});

/**
 * Action creator to dispatch to change the sort order
 */
export const setSortOrder = (sortOrder: SortOrder): FluxAction => ({
  type: SETTINGS_SORT,
  payload: sortOrder
});

/**
 * Action creator to dispatch to change the display units
 * 
 */
export const setDisplayUnits  = (displayUnits: DisplayUnits): FluxAction => ({
  type: SETTINGS_DISPLAY,
  payload: displayUnits
});
