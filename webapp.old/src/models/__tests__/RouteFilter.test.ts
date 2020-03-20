/* eslint-env jest */

/*
 * This tests the isMatch method of ZwiftRoute
 */
import RouteFilter from 'models/RouteFilter';
import ZwiftRoute from 'models/ZwiftRoute';
import ZwiftRouteData from 'models/ZwiftRouteData';
import ZwiftUserData from 'models/ZwiftUserData';
import ZwiftSport from 'models/ZwiftSport';

const sampleData: ZwiftRouteData = {
  world: "Watopia",
  name: "The Pretzel",
  distance: 72.4,
  elevation: 1360,
  difficulty: 34.53,
  leadin_distance: 0,
  leadin_elevation: 0,
  sports: "cycling",
  level: 0,
  eventonly: false,
  link: "http://zwiftinsider.com/the-pretzel/",
  id: "d6bad120-7602-4beb-94df-fb3b71d5b8c8"
}

/** Creates a new ZwiftRoute for us */
const createRoute = (updatedData: Record<string,any>, isCompleted: boolean): ZwiftRoute => {
  const routeData: ZwiftRouteData = { ...sampleData, ...updatedData };
  const userData: ZwiftUserData = { routeId: routeData.id, isCompleted };
  return new ZwiftRoute(routeData, userData);
};

/** Create a new RouteFilter easily */
const createFilter = (updates: Record<string,any>): RouteFilter => {
  const fullFilter = {
    includeCompletedRoutes: false,
    includeDefaultWorld: false,
    includeEventOnlyRoutes: false
  };
  return { ...fullFilter, ...updates };
}

test('filter for world match', () => {
  const route = createRoute({ world: 'London' }, false);
  const filter: RouteFilter = createFilter({ world: 'London' });
  expect(route.isMatch(filter)).toStrictEqual(true);
});

test('filter for !world match', () => {
  const route = createRoute({ world: 'London' }, false);
  const filter: RouteFilter = createFilter({ world: 'Yorkshire' });
  expect(route.isMatch(filter)).toStrictEqual(false);
});

test('filter for all worlds', () => {
  const route = createRoute({ world: 'London' }, false);
  const filter: RouteFilter = createFilter({});
  expect(route.isMatch(filter)).toStrictEqual(true);
});

test('filter for world + watopia', () => {
  const route1 = createRoute({ world: 'London' }, false);
  const route2 = createRoute({ world: 'Watopia' }, false);
  const route3 = createRoute({ world: 'Yorkshire' }, false);
  const filter: RouteFilter = createFilter({ world: 'London', includeDefaultWorld: true });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(true);
  expect(route3.isMatch(filter)).toStrictEqual(false);
});

test('filter for all worlds + watopia', () => {
  const route1 = createRoute({ world: 'London' }, false);
  const route2 = createRoute({ world: 'Watopia' }, false);
  const route3 = createRoute({ world: 'Yorkshire' }, false);
  const filter: RouteFilter = createFilter({ includeDefaultWorld: true });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(true);
  expect(route3.isMatch(filter)).toStrictEqual(true);
});

test('filter for all sports', () => {
  const route1 = createRoute({ sports: 'all' }, false);
  const route2 = createRoute({ sports: 'cycling' }, false);
  const route3 = createRoute({ sports: 'running' }, false);
  const filter: RouteFilter = createFilter({ });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(true);
  expect(route3.isMatch(filter)).toStrictEqual(true);
});

test('filter for sport = cycling', () => {
  const route1 = createRoute({ sports: 'all' }, false);
  const route2 = createRoute({ sports: 'cycling' }, false);
  const route3 = createRoute({ sports: 'running' }, false);
  const filter: RouteFilter = createFilter({ sport: ZwiftSport.Cycling });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(true);
  expect(route3.isMatch(filter)).toStrictEqual(false);
});

test('filter for sport = running', () => {
  const route1 = createRoute({ sports: 'all' }, false);
  const route2 = createRoute({ sports: 'cycling' }, false);
  const route3 = createRoute({ sports: 'running' }, false);
  const filter: RouteFilter = createFilter({ sport: ZwiftSport.Running });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(false);
  expect(route3.isMatch(filter)).toStrictEqual(true);
});

test('filter for includeCompletedRoutes', () => {
  const route1 = createRoute({}, false);
  const route2 = createRoute({}, true);
  const filter: RouteFilter = createFilter({ includeCompletedRoutes: true });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(true);
});

test('filter for !includeCompletedRoutes', () => {
  const route1 = createRoute({}, false);
  const route2 = createRoute({}, true);
  const filter: RouteFilter = createFilter({ includeCompletedRoutes: false });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(false);
});

test('filter for includeEventOnly routes', () => {
  const route1 = createRoute({ eventonly: true }, false);
  const route2 = createRoute({ eventonly: false }, false);
  const filter: RouteFilter = createFilter({ includeEventOnlyRoutes: true });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(true);
});

test('filter for !includeEventOnly routes', () => {
  const route1 = createRoute({ eventonly: true }, false);
  const route2 = createRoute({ eventonly: false }, false);
  const filter: RouteFilter = createFilter({ includeEventOnlyRoutes: false });
  expect(route1.isMatch(filter)).toStrictEqual(false);
  expect(route2.isMatch(filter)).toStrictEqual(true);
});

test('filter for not min zwift level', () => {
  const route1 = createRoute({ level: 0 }, false);
  const filter: RouteFilter = createFilter({ });
  expect(route1.isMatch(filter)).toStrictEqual(true);
});

test('filter for min zwift level', () => {
  const route1 = createRoute({ level: 5 }, false);
  const route2 = createRoute({ level: 15 }, false);
  const filter: RouteFilter = createFilter({ maximumZwiftLevel: 10 });
  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(false);

});

test('complex filter test', () => {
  // Test for a normal filter - London + Watopia, cycling, not completed.
  const filter: RouteFilter = {
    world: 'London',
    sport: ZwiftSport.Cycling,
    includeCompletedRoutes: false,
    includeDefaultWorld: true,
    includeEventOnlyRoutes: false
  };

  const route1 = createRoute({ world: 'London', sports: 'cycling', eventonly: false }, false);
  const route2 = createRoute({ world: 'Watopia', sports: 'cycling', eventonly: false }, false);
  const route3 = createRoute({ world: 'London', sports: 'running', eventonly: false }, false);
  const route4 = createRoute({ world: 'Watopia', sports: 'running', eventonly: false }, false);
  const route5 = createRoute({ world: 'London', sports: 'cycling', eventonly: true }, false);
  const route6 = createRoute({ world: 'Watopia', sports: 'cycling', eventonly: true }, false);
  const route7 = createRoute({ world: 'London', sports: 'running', eventonly: true }, false);
  const route8 = createRoute({ world: 'Watopia', sports: 'running', eventonly: true }, false);
  const route9 = createRoute({ world: 'Yorkshire', sports: 'cycling', eventonly: false }, false);
  const route10 = createRoute({ world: 'Yorkshire', sports: 'cycling', eventonly: false }, false);
  const route11 = createRoute({ world: 'London', sports: 'cycling', eventonly: false }, true);
  const route12 = createRoute({ world: 'Watopia', sports: 'cycling', eventonly: false }, true);
  const route13 = createRoute({ world: 'London', sports: 'running', eventonly: false }, true);
  const route14 = createRoute({ world: 'Watopia', sports: 'running', eventonly: false }, true);
  const route15 = createRoute({ world: 'London', sports: 'cycling', eventonly: true }, true);
  const route16 = createRoute({ world: 'Watopia', sports: 'cycling', eventonly: true }, true);
  const route17 = createRoute({ world: 'London', sports: 'running', eventonly: true }, true);
  const route18 = createRoute({ world: 'Watopia', sports: 'running', eventonly: true }, true);

  expect(route1.isMatch(filter)).toStrictEqual(true);
  expect(route2.isMatch(filter)).toStrictEqual(true);
  expect(route3.isMatch(filter)).toStrictEqual(false);
  expect(route4.isMatch(filter)).toStrictEqual(false);
  expect(route5.isMatch(filter)).toStrictEqual(false);
  expect(route6.isMatch(filter)).toStrictEqual(false);
  expect(route7.isMatch(filter)).toStrictEqual(false);
  expect(route8.isMatch(filter)).toStrictEqual(false);
  expect(route9.isMatch(filter)).toStrictEqual(false);
  expect(route10.isMatch(filter)).toStrictEqual(false);
  expect(route11.isMatch(filter)).toStrictEqual(false);
  expect(route12.isMatch(filter)).toStrictEqual(false);
  expect(route13.isMatch(filter)).toStrictEqual(false);
  expect(route14.isMatch(filter)).toStrictEqual(false);
  expect(route15.isMatch(filter)).toStrictEqual(false);
  expect(route16.isMatch(filter)).toStrictEqual(false);
  expect(route17.isMatch(filter)).toStrictEqual(false);
  expect(route18.isMatch(filter)).toStrictEqual(false);
});
