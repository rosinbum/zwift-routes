/* eslint-env jest */

import ZwiftRoute from '../ZwiftRoute';

const completeSample = {
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

const incompleteSample = {
  world: "cRiT CITY",
  name: "The Pretzel",
  distance: 72.4,
  elevation: 1360,
  difficulty: 34.53,
  leadin_distance: 0,
  leadin_elevation: 0,
  eventonly: true,
  id: "d6bad120-7602-4beb-94df-fb3b71d5b8c8"
};

const dynamicDataSample = {
  routeId: "d6bad120-7602-4beb-94df-fb3b71d5b8c8",
  isCompleted: true
};

test('can create a ZwiftRoute with dynamic data', () => {
  const result = new ZwiftRoute(completeSample, dynamicDataSample);
  expect(result).toBeInstanceOf(ZwiftRoute);
});

test('can create a ZwiftRoute without dynamic data', () => {
  const result = new ZwiftRoute(completeSample);
  expect(result).toBeInstanceOf(ZwiftRoute);
});

test('extracts id from the static data', () => {
  const result = new ZwiftRoute(completeSample);
  expect(result.id).toStrictEqual(completeSample.id);
});

test('extracts difficulty from the static data', () => {
  const result = new ZwiftRoute(completeSample);
  expect(result.difficulty).toBeCloseTo(completeSample.difficulty, 2);
});

test('extracts isCompleted from the dynamic data', () => {
  const result1 = new ZwiftRoute(completeSample);
  expect(result1.isCompleted).toStrictEqual(false);

  const result2 = new ZwiftRoute(completeSample, dynamicDataSample);
  expect(result2.isCompleted).toStrictEqual(true);
});

test('extracts isEventOnly from the static data', () => {
  const result1 = new ZwiftRoute(completeSample);
  expect(result1.isEventOnly).toStrictEqual(false);

  const result2 = new ZwiftRoute(incompleteSample);
  expect(result2.isEventOnly).toStrictEqual(true);
});

test('extracts isForCycling from the static data', () => {
  const runningExample = { ...completeSample, sports: 'running' };
  const allExample = { ...completeSample, sports: 'all' };

  // cycling
  const result1 = new ZwiftRoute(completeSample);
  expect(result1.isForCycling).toStrictEqual(true);

  // running
  const result2 = new ZwiftRoute(runningExample);
  expect(result2.isForCycling).toStrictEqual(false);

  // all
  const result3 = new ZwiftRoute(allExample);
  expect(result3.isForCycling).toStrictEqual(true);

  // not defined
  const result4 = new ZwiftRoute(incompleteSample);
  expect(result4.isForCycling).toStrictEqual(true);
});

test('extracts isForRunning from the static data', () => {
  const runningExample = { ...completeSample, sports: 'running' };
  const allExample = { ...completeSample, sports: 'all' };

  // cycling
  const result1 = new ZwiftRoute(completeSample);
  expect(result1.isForRunning).toStrictEqual(false);

  // running
  const result2 = new ZwiftRoute(runningExample);
  expect(result2.isForRunning).toStrictEqual(true);

  // all
  const result3 = new ZwiftRoute(allExample);
  expect(result3.isForRunning).toStrictEqual(true);

  // not defined
  const result4 = new ZwiftRoute(incompleteSample);
  expect(result4.isForRunning).toStrictEqual(true);
});

test('extracts leadinDistance from the static data', () => {
  const result = new ZwiftRoute(completeSample);
  expect(result.leadinDistance).toBeCloseTo(completeSample.leadin_distance, 2);
});

test('extracts leadinElevationGain from the static data', () => {
  const result = new ZwiftRoute(completeSample);
  expect(result.leadinElevationGain).toBeCloseTo(completeSample.leadin_elevation, 2);
});

test('extracts minimumZwiftLevel from the static data', () => {
  const result1 = new ZwiftRoute(completeSample);
  expect(result1.minimumZwiftLevel).toBe(15);

  const result2 = new ZwiftRoute(incompleteSample);
  expect(result2.minimumZwiftLevel).toBe(0);
});

test('extracts routeDistance from the static data', () => {
  const result = new ZwiftRoute(completeSample);
  expect(result.routeDistance).toBeCloseTo(completeSample.distance, 2);
});

test('extracts routeElevationGain from the static data', () => {
  const result = new ZwiftRoute(completeSample);
  expect(result.routeElevationGain).toBeCloseTo(completeSample.elevation, 2);
});

test('extracts route name from the static data', () => {
  const result = new ZwiftRoute(completeSample);
  expect(result.routeName).toBe(completeSample.name);
});

test('calculates totalDistance properly', () => {
  const result = new ZwiftRoute(completeSample);
  const expected = completeSample.leadin_distance + completeSample.distance;
  expect(result.totalDistance).toBeCloseTo(expected, 2);
});

test('calculates totalElevationGain properly', () => {
  const result = new ZwiftRoute(completeSample);
  const expected = completeSample.leadin_elevation + completeSample.elevation;
  expect(result.totalElevationGain).toBeCloseTo(expected, 2);
});

test('extracts zwiftInsiderLink from static data', () => {
  const result1 = new ZwiftRoute(completeSample);
  expect(result1.zwiftInsiderLink).toBe(completeSample.link);

  const result2 = new ZwiftRoute(incompleteSample);
  expect(result2.zwiftInsiderLink).not.toBeDefined();
});

test('extracts zwiftWorld from static data', () => {
  const result1 = new ZwiftRoute(completeSample);
  expect(result1.zwiftWorld).toBe('Watopia');

  const result2 = new ZwiftRoute(incompleteSample);
  expect(result2.zwiftWorld).toBe('Crit City');
});

test('extracts user data from the object', () => {
  const result1 = new ZwiftRoute(completeSample);
  const expected1 = { routeId: completeSample.id, isCompleted: false };
  expect(result1.getZwiftUserData()).toStrictEqual(expected1);

  const result2 = new ZwiftRoute(completeSample, dynamicDataSample);
  const expected2 = { routeId: completeSample.id, isCompleted: true };
  expect(result2.getZwiftUserData()).toStrictEqual(expected2);
});

test('can set isCompleted and have it appear in user data', () => {
  const result1 = new ZwiftRoute(completeSample);
  const expected1 = { routeId: completeSample.id, isCompleted: false };
  expect(result1.getZwiftUserData()).toStrictEqual(expected1);

  result1.isCompleted = true;
  const expected2 = { routeId: completeSample.id, isCompleted: true };
  expect(result1.getZwiftUserData()).toStrictEqual(expected2);
});
