/* eslint-env jest */
import ZwiftRoute from 'models/ZwiftRoute';
import SortField from 'models/SortField';
import getComparator from '../comparators';


// the whole point of the comparators is to compare the two ZwiftRoutes,
// so here are two ZwiftRoutes
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
  id: "sample1"
};
const route1 = new ZwiftRoute(sample1);

const sample2 = {
  world: "London",
  name: "Classique",
  distance: 8.2,
  elevation: 140,
  difficulty: 1.4,
  leadin_distance: 0,
  leadin_elevation: 0,
  sports: "cycling",
  level: 0,
  eventonly: false,
  link: "http://zwiftinsider.com/classique/",
  id: "sample2"
};
const route2 = new ZwiftRoute(sample2);

const sample3 = {
  world: "London",
  name: "Classique Reverse",
  distance: 8.2,
  elevation: 140,
  difficulty: 1.4,
  leadin_distance: 0,
  leadin_elevation: 0,
  sports: "cycling",
  level: 0,
  eventonly: false,
  link: "http://zwiftinsider.com/classique/",
  id: "sample3"
};
const route3 = new ZwiftRoute(sample3);

const routes = [ route3, route1, route2 ];

test('sort by difficulty ascending', () => {
  const comparator = getComparator(SortField.Difficulty, true);
  const expected = [ 'sample3', 'sample2', 'sample1' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by difficulty descending', () => {
  const comparator = getComparator(SortField.Difficulty, false);
  const expected = [ 'sample1', 'sample3', 'sample2' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by name ascending', () => {
  const comparator = getComparator(SortField.Name, true);
  const expected = [ 'sample2', 'sample3', 'sample1' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by name descending', () => {
  const comparator = getComparator(SortField.Name, false);
  const expected = [ 'sample1', 'sample3', 'sample2' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by route distance ascending', () => {
  const comparator = getComparator(SortField.RouteDistance, true);
  const expected = [ 'sample3', 'sample2', 'sample1' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by route distance descending', () => {
  const comparator = getComparator(SortField.RouteDistance, false);
  const expected = [ 'sample1', 'sample3', 'sample2' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by route elevation ascending', () => {
  const comparator = getComparator(SortField.RouteElevationGain, true);
  const expected = [ 'sample3', 'sample2', 'sample1' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by route elevation descending', () => {
  const comparator = getComparator(SortField.RouteElevationGain, false);
  const expected = [ 'sample1', 'sample3', 'sample2' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by total distance ascending', () => {
  const comparator = getComparator(SortField.TotalDistance, true);
  const expected = [ 'sample3', 'sample2', 'sample1' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by total distance descending', () => {
  const comparator = getComparator(SortField.TotalDistance, false);
  const expected = [ 'sample1', 'sample3', 'sample2' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by total elevation ascending', () => {
  const comparator = getComparator(SortField.TotalElevationGain, true);
  const expected = [ 'sample3', 'sample2', 'sample1' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});

test('sort by total elevation descending', () => {
  const comparator = getComparator(SortField.TotalElevationGain, false);
  const expected = [ 'sample1', 'sample3', 'sample2' ];
  const actual = routes.sort(comparator).map((r) => r.id);
  expect(actual).toStrictEqual(expected);
});
