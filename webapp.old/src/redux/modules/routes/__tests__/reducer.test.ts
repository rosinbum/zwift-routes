import { FluxAction } from 'redux/actions';
import ZwiftRoute from 'models/ZwiftRoute';
import reducer, { RoutesState } from '../reducer';
import { routesLoader, replaceRoute } from '../actions';

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
const sample2 = {
  world: "cRiT CITY",
  name: "Crit Loop",
  distance: 72.4,
  elevation: 1360,
  difficulty: 34.53,
  leadin_distance: 0,
  leadin_elevation: 0,
  eventonly: true,
  id: "d6bad120-7602-1340-94df-fb3b71d5b8c8"
};
const invalidAction: FluxAction = { type: '@@invalid' };
const randomState: RoutesState = [ new ZwiftRoute(sample1), new ZwiftRoute(sample2) ];

test('initialState is set', () => {
  const result = reducer(undefined, invalidAction);
  expect(result).toBeDefined();
  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(0);
});

test('random actions return same state', () => {
  const result = reducer(randomState, invalidAction);
  expect(result).toBeDefined();
  expect(result).toStrictEqual(randomState);
});

test('action routesLoader', () => {
  const startState = reducer(undefined, invalidAction);
  const action = routesLoader([ new ZwiftRoute(sample1), new ZwiftRoute(sample2) ]);
  const endState = reducer(startState, action);
  expect(endState).toBeDefined();
  expect(endState).toStrictEqual(randomState);
});

test('action replaceRoute', () => {
  const startState = reducer(randomState, invalidAction);
  const routeChange = new ZwiftRoute(sample1); 
  routeChange.isCompleted = true;
  const action = replaceRoute(routeChange);
  const endState = reducer(startState, action);
  expect(endState).toBeDefined();
  expect(endState).toBeInstanceOf(Array);
  expect(endState).toHaveLength(2);
  expect(endState[0].isCompleted).toBe(true);
  expect(endState[1].isCompleted).toBe(false);
});
