import { FluxAction } from '../../types';
import { ActionType } from './actions';
import AppState from './state';
import { 
  DisplayUnits, 
  SortDirection,
  SortField, 
  ZwiftSport
} from '../../../models';

const initialState: AppState = {
  requests: 0,
  display: { 
    units: DisplayUnits.Imperial 
  },
  filter: {
    sport: ZwiftSport.Cycling,
    includeCompletedRoutes: false,
    includeDefaultWorld: true,
    includeEventOnlyRoutes: false
  },
  sortOrder: {
    sortField: SortField.Difficulty,
    sortDirection: SortDirection.Ascending
  }
};

function reducer(state = initialState, action: FluxAction): AppState {
  switch (action.type) {
    case ActionType.ClearError:
      return { ...state, error: undefined };
    case ActionType.SetDisplay:
      return { ...state, display: action.payload };
    case ActionType.SetError:
      return { ...state, requests: state.requests - 1, error: action.error };
    case ActionType.SetFilter:
      return { ...state, filter: action.payload };
    case ActionType.SetSort:
      return { ...state, sortOrder: action.payload };
    case ActionType.StartRequest:
      return { ...state, requests: state.requests + 1 };
    case ActionType.StopRequest:
      return { ...state, requests: state.requests - 1 };
    default:
      return state;
  }
}

export default reducer;