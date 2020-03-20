import { FluxAction } from 'redux/actions';
import { SETTINGS_DISPLAY, SETTINGS_FILTER, SETTINGS_SORT } from './actions';
import RouteFilter from 'models/RouteFilter';
import SortField from 'models/SortField';
import DisplayUnits from 'models/DisplayUnits';
import ZwiftSport from 'models/ZwiftSport';
import SortOrder from 'models/SortOrder';

/**
 * Type for the settings portion of the application state stored in redux.
 */
export type SettingsState = Readonly<{
  /**
   * Current route filter
   */
  routeFilter: RouteFilter;

  /**
   * Current sort order
   */
  sortOrder: SortOrder;

  /**
   * Current display Units
   */
  displayUnits: DisplayUnits;
}>;

const initialState: SettingsState = {
  routeFilter: {
    sport: ZwiftSport.Cycling,
    includeCompletedRoutes: false,
    includeDefaultWorld: true,
    includeEventOnlyRoutes: false
  },
  sortOrder: {
    orderBy: SortField.Difficulty,
    ascending: true
  },
  displayUnits: DisplayUnits.Imperial
};

/**
 * Redux reducer for the network portion of the application state.
 * 
 * @param state Current state
 * @param action Action to be performed
 * @returns New state
 */
function reducer(state = initialState, action: FluxAction): SettingsState {
  switch (action.type) {
    case SETTINGS_DISPLAY:
      return { ...state, displayUnits: action.payload };
    case SETTINGS_FILTER:
      return { ...state, routeFilter: action.payload };
    case SETTINGS_SORT:
      return { ...state, sortOrder: action.payload };
    default:
      return state;
  }
}

export default reducer;
