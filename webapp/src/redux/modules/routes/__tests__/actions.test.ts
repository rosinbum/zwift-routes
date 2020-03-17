import * as routes from '../actions';
import ZwiftRoute from 'models/ZwiftRoute';

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
