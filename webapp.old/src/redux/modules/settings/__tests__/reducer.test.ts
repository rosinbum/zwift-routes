/* eslint-env jest */
import { FluxAction } from 'redux/actions';
import {
  setDisplayUnits,
  setRouteFilter,
  setSortOrder
} from '../actions';
import reducer, { SettingsState } from '../reducer';
import DisplayUnits from 'models/DisplayUnits';
import RouteFilter from 'models/RouteFilter';
import SortField from 'models/SortField';
import SortOrder from 'models/SortOrder';
import ZwiftSport from 'models/ZwiftSport';

const invalidAction: FluxAction = { type: '@@invalid' };
const randomState: SettingsState = {
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

test('initialState is set', () => {
  const result = reducer(undefined, invalidAction);
  expect(result).toBeDefined();
  expect(result.routeFilter).toBeInstanceOf(Object);
  expect(result.sortOrder).toStrictEqual({ orderBy: SortField.Difficulty, ascending: true });
  expect(result.displayUnits).toStrictEqual(DisplayUnits.Imperial);
});

test('random actions return same state', () => {
  const result = reducer(randomState, invalidAction);
  expect(result).toBeDefined();
  expect(result).toStrictEqual(randomState);
});

test('action setRouteFilter', () => {
  const startState = reducer(randomState, invalidAction);
  const newFilter: RouteFilter = {
    world: 'London',
    includeCompletedRoutes: true,
    includeDefaultWorld: true,
    includeEventOnlyRoutes: true
  };
  const action = setRouteFilter(newFilter);
  const endState = reducer(startState, action);
  expect(endState).toBeDefined();
  expect(endState.routeFilter).toStrictEqual(newFilter);
});

test('action setSortOrder', () => {
  const startState = reducer(randomState, invalidAction);
  const newSortOrder: SortOrder = { orderBy: SortField.TotalDistance, ascending: false };
  const action = setSortOrder(newSortOrder);
  const endState = reducer(startState, action);
  expect(endState).toBeDefined();
  expect(endState.sortOrder).toStrictEqual(newSortOrder);
});

test('action setDisplayUnits', () => {
  const startState = reducer(undefined, invalidAction);
  const action = setDisplayUnits(DisplayUnits.Metric);
  const endState = reducer(startState, action);
  expect(endState).toBeDefined();
  expect(endState.displayUnits).toStrictEqual(DisplayUnits.Metric);
});
