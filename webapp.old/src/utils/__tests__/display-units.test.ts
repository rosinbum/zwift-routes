/* eslint-env jest */
import { toMiles, toFeet, formatDistance, formatElevationGain } from '../display-units';
import DisplayUnits from 'models/DisplayUnits';

test('convert km to miles', () => {
  expect(toMiles(1)).toBeCloseTo(0.62, 2);
  expect(toMiles(64.2)).toBeCloseTo(39.89, 2);
});

test('display km', () => {
  expect(formatDistance(1, DisplayUnits.Metric)).toStrictEqual('1.0km');
  expect(formatDistance(64.2, DisplayUnits.Metric)).toStrictEqual('64.2km');
});

test('display miles', () => {
  expect(formatDistance(1, DisplayUnits.Imperial)).toStrictEqual('0.6mi');
  expect(formatDistance(64.2, DisplayUnits.Imperial)).toStrictEqual('39.9mi');
});

test('convert m to ft', () => {
  expect(toFeet(3)).toBeCloseTo(9.84, 2);
  expect(toFeet(1980)).toBeCloseTo(6496.06, 2);
});

test('display m', () => {
  expect(formatElevationGain(1, DisplayUnits.Metric)).toStrictEqual('1m');
  expect(formatElevationGain(1980, DisplayUnits.Metric)).toStrictEqual('1980m');
});

test('display feet', () => {
  expect(formatElevationGain(3, DisplayUnits.Imperial)).toStrictEqual('10ft');
  expect(formatElevationGain(1980, DisplayUnits.Imperial)).toStrictEqual('6496ft');
});
