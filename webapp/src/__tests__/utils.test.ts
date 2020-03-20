/* eslint-env jest */
import * as utils from '../utils';
import { DisplayUnits, ZwiftRoute, SortField, SortDirection } from '../models';

const sourceData = [
  {
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
  },
  {
    world: "London",
    name: "Classique",
    distance: 8.2,
    elevation: 140,
    difficulty: 1.4,
    leadin_distance: 2.1,
    leadin_elevation: 82.4,
    sports: "cycling",
    level: 0,
    eventonly: false,
    link: "http://zwiftinsider.com/classique/",
    id: "sample2"
  },
  {
    world: "London",
    name: "Classique Reverse",
    distance: 8.5,
    elevation: 145,
    difficulty: 1.6,
    leadin_distance: 0,
    leadin_elevation: 0,
    sports: "cycling",
    level: 0,
    eventonly: false,
    link: "http://zwiftinsider.com/classique/",
    id: "sample3"
  }
];
const routes = sourceData.map((r) => new ZwiftRoute(r));

describe('utils', () => {
  describe('getComparator', () => {
    it('can sort by difficulty ascending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.Difficulty, 
        sortDirection: SortDirection.Ascending
      });
      const expected = [ 'sample2', 'sample3', 'sample1' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });

    it('can sort by difficulty descending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.Difficulty, 
        sortDirection: SortDirection.Descending
      });
      const expected = [ 'sample1', 'sample3', 'sample2' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });

    it('can sort by name ascending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.Name, 
        sortDirection: SortDirection.Ascending
      });
      const expected = [ 'sample2', 'sample3', 'sample1' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });

    it('can sort by name descending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.Name, 
        sortDirection: SortDirection.Descending
      });
      const expected = [ 'sample1', 'sample3', 'sample2' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });
    
    it('can sort by route distance ascending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.RouteDistance, 
        sortDirection: SortDirection.Ascending
      });
      const expected = [ 'sample2', 'sample3', 'sample1' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });

    it('can sort by route distance descending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.RouteDistance, 
        sortDirection: SortDirection.Descending
      });
      const expected = [ 'sample1', 'sample3', 'sample2' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });
    
    it('can sort by route elevation gain ascending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.RouteElevationGain, 
        sortDirection: SortDirection.Ascending
      });
      const expected = [ 'sample2', 'sample3', 'sample1' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });

    it('can sort by route elevation gain descending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.RouteElevationGain, 
        sortDirection: SortDirection.Descending
      });
      const expected = [ 'sample1', 'sample3', 'sample2' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });
    
    it('can sort by total distance ascending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.TotalDistance, 
        sortDirection: SortDirection.Ascending
      });
      const expected = [ 'sample3', 'sample2', 'sample1' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });

    it('can sort by total distance descending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.TotalDistance, 
        sortDirection: SortDirection.Descending
      });
      const expected = [ 'sample1', 'sample2', 'sample3' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });
    
    it('can sort by total elevation gain ascending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.TotalElevationGain, 
        sortDirection: SortDirection.Ascending
      });
      const expected = [ 'sample3', 'sample2', 'sample1' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });

    it('can sort by total elevation gain descending', () => {
      const comparator = utils.getComparator({
        sortField: SortField.TotalElevationGain, 
        sortDirection: SortDirection.Descending
      });
      const expected = [ 'sample1', 'sample2', 'sample3' ];
      const actual = routes.sort(comparator).map((r) => r.id);
      expect(actual).toStrictEqual(expected);
    });
  });
  describe('toMiles', () => {
    it('can convert km to miles', () => {
      expect(utils.toMiles(1)).toBeCloseTo(0.62, 2);
      expect(utils.toMiles(64.2)).toBeCloseTo(39.89, 2);
    });
  });

  describe('toFeet', () => {
    it('can convert meters to feet', () => {
      expect(utils.toFeet(3)).toBeCloseTo(9.84, 2);
      expect(utils.toFeet(1980)).toBeCloseTo(6496.06, 2);
    });
  });

  describe('formatDistance', () => {
    it('can display metric distances', () => {
      expect(utils.formatDistance(1, DisplayUnits.Metric)).toStrictEqual('1.0km');
      expect(utils.formatDistance(64.2, DisplayUnits.Metric)).toStrictEqual('64.2km');
    });

    it('can display imperial distance', () => {
      expect(utils.formatDistance(1, DisplayUnits.Imperial)).toStrictEqual('0.6mi');
      expect(utils.formatDistance(64.2, DisplayUnits.Imperial)).toStrictEqual('39.9mi');
    });
  });

  describe('formatElevationGain', () => {
    it('can display metric elevation gains', () => {
      expect(utils.formatElevationGain(1, DisplayUnits.Metric)).toStrictEqual('1m');
      expect(utils.formatElevationGain(1980, DisplayUnits.Metric)).toStrictEqual('1980m');
    });

    it('can display imperial elevation gains', () => {
      expect(utils.formatElevationGain(3, DisplayUnits.Imperial)).toStrictEqual('10ft');
      expect(utils.formatElevationGain(1980, DisplayUnits.Imperial)).toStrictEqual('6496ft');
    });
  });
});