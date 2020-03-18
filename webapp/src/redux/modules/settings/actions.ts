import { createAction } from '@reduxjs/toolkit';
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
export const setRouteFilter = createAction<RouteFilter>(SETTINGS_FILTER);

/**
 * Action creator to dispatch to change the sort order
 */
export const setSortOrder = createAction<SortOrder>(SETTINGS_SORT);

/**
 * Action creator to dispatch to change the display units
 * 
 */
export const setDisplayUnits  = createAction<DisplayUnits>(SETTINGS_DISPLAY);
