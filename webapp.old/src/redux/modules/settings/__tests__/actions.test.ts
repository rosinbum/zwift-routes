/* eslint-env jest */
import * as actions from '../actions';
import RouteFilter from 'models/RouteFilter';
import SortOrder from 'models/SortOrder';
import DisplayUnits from 'models/DisplayUnits';
import SortField from 'models/SortField';

test('can create route filter action', () => {
  const routeFilter: RouteFilter = {
    world: 'Watopia',
    includeCompletedRoutes: true,
    includeEventOnlyRoutes: false,
    includeDefaultWorld: true
  };
  const actual = actions.setRouteFilter(routeFilter);
  expect(actual).toBeDefined();
  expect(actual).toBeInstanceOf(Object);
  expect(actual.payload).toStrictEqual(routeFilter);
});

test('can create sort order action', () => {
  const sortOrder: SortOrder = {
    orderBy: SortField.Name,
    ascending: false
  };
  const actual = actions.setSortOrder(sortOrder);
  expect(actual).toBeDefined();
  expect(actual).toBeInstanceOf(Object);
  expect(actual.payload).toStrictEqual(sortOrder);
});

test('can create display units action', () => {
  const displayUnits: DisplayUnits = DisplayUnits.Imperial;
  const actual = actions.setDisplayUnits(displayUnits);
  expect(actual).toBeDefined();
  expect(actual).toBeInstanceOf(Object);
  expect(actual.payload).toStrictEqual(displayUnits);
});
