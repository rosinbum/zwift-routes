/* eslint-env jest */
import * as actions from '../actions';
import * as network from '../modules/network/actions';
import * as routes from '../modules/routes/actions';
import * as settings from '../modules/settings/actions';
import ZwiftRoute from 'models/ZwiftRoute';
import RouteFilter from 'models/RouteFilter';
import SortOrder from 'models/SortOrder';
import DisplayUnits from 'models/DisplayUnits';
import SortField from 'models/SortField';

const sample1 = {
  world: "Watopia",
  name: "The Pretzel",
  distance: 72.4,
  elevation: 1360,
  difficulty: 34.53,
  leadin_distance: 0,
  leadin_elevation: 0,
  sports: "cycling",
  level: 15,
  eventonly: false,
  link: "http://zwiftinsider.com/the-pretzel/",
  id: "d6bad120-7602-4beb-94df-fb3b71d5b8c8"
};

test('can create NET_START_REQUEST', () => {
  const result = actions.netStartRequest();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_START_REQUEST);
});

test('can create NET_STOP_REQUEST', () => {
  const result = actions.netStopRequest();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_STOP_REQUEST);
});

test('can create NET_SET_ERROR', () => {
  const result = actions.netSetError(new Error());
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_SET_ERROR);
  expect(result.error).toBeInstanceOf(Error);
});

test('can create NET_CLEAR_ERROR', () => {
  const result = actions.netClearError();
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(network.NET_CLEAR_ERROR);
});

test('can create ROUTES_LOADER', () => {
  const argument: ZwiftRoute[] = [];
  const result = routes.routesLoader(argument);
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(routes.ROUTES_LOADER);
});

test('can create ROUTES_REPLACE', () => {
  const route = new ZwiftRoute(sample1);
  const result = routes.replaceRoute(route);
  expect(result).toBeInstanceOf(Object);
  expect(result.type).toBe(routes.ROUTES_REPLACE);
});

test('can create route filter action', () => {
  const routeFilter: RouteFilter = {
    world: 'Watopia',
    includeCompletedRoutes: true,
    includeEventOnlyRoutes: false,
    includeDefaultWorld: true
  };
  const actual = settings.setRouteFilter(routeFilter);
  expect(actual).toBeDefined();
  expect(actual).toBeInstanceOf(Object);
  expect(actual.payload).toStrictEqual(routeFilter);
});

test('can create sort order action', () => {
  const sortOrder: SortOrder = {
    orderBy: SortField.Name,
    ascending: false
  };
  const actual = settings.setSortOrder(sortOrder);
  expect(actual).toBeDefined();
  expect(actual).toBeInstanceOf(Object);
  expect(actual.payload).toStrictEqual(sortOrder);
});

test('can create display units action', () => {
  const displayUnits: DisplayUnits = DisplayUnits.Imperial;
  const actual = settings.setDisplayUnits(displayUnits);
  expect(actual).toBeDefined();
  expect(actual).toBeInstanceOf(Object);
  expect(actual.payload).toStrictEqual(displayUnits);
});
