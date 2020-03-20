/* eslint-env jest */
import { ZwiftRoute, ZwiftSport, RouteFilter } from '../models';
import staticData from '../services/data/routes.json';

describe('ZwiftRoute', () => {
  it('can be created with routes.json data', () => {
    const actual = new ZwiftRoute(staticData[0]);
    expect(actual).toBeInstanceOf(ZwiftRoute);
  });

  it('can be created with routes.json and user data', () => {
    const userData = { routeId: staticData[0].id, isCompleted: true };
    const actual = new ZwiftRoute(staticData[0], userData);
    expect(actual).toBeInstanceOf(ZwiftRoute);
  });
  
  it('defaults level to 0', () => {
    const sampleData = {
      world: "Watopia",
      name: "The Pretzel",
      distance: 72.4,
      elevation: 1360,
      difficulty: 34.53,
      leadin_distance: 0,
      leadin_elevation: 0,
      sports: "cycling",
      eventonly: false,
      link: "http://zwiftinsider.com/the-pretzel/",
      id: "sample1"
    };
    const actual = new ZwiftRoute(sampleData);
    expect(actual.minimumZwiftLevel).toStrictEqual(0);
  });

  it('defaults sport to all', () => {
    const sampleData = {
      world: "Watopia",
      name: "The Pretzel",
      distance: 72.4,
      elevation: 1360,
      difficulty: 34.53,
      leadin_distance: 0,
      leadin_elevation: 0,
      eventonly: false,
      link: "http://zwiftinsider.com/the-pretzel/",
      id: "sample1"
    };
    const actual = new ZwiftRoute(sampleData);
    expect(actual.isForCycling).toStrictEqual(true);
    expect(actual.isForRunning).toStrictEqual(true);
  });

  it('computes total distance correctly', () => {
    // Test with no lead-in
    const idWithNoLeadin = 'd6bad120-7602-4beb-94df-fb3b71d5b8c8';
    const route1 = staticData.find((r) => r.id === idWithNoLeadin);
    expect(route1).toBeDefined();
    if (route1) {
      const expected1 = route1.distance;
      const actual1 = new ZwiftRoute(route1);
      expect(actual1.totalDistance).toStrictEqual(expected1);
    }

    // Test with lead-in
    const idWithLeadin = '26eaf3f2-ba6e-436e-a050-fc65c38ecbb2';
    const route2 = staticData.find((r) => r.id === idWithLeadin);
    expect(route2).toBeDefined();
    if (route2) {
      const expected2 = route2.distance + route2.leadin_distance;
      const actual2 = new ZwiftRoute(route2);
      expect(actual2.totalDistance).toStrictEqual(expected2);
    }
  });

  it('computes total elevation gain correctly', () => {
    // Test with no lead-in
    const idWithNoLeadin = 'd6bad120-7602-4beb-94df-fb3b71d5b8c8';
    const route1 = staticData.find((r) => r.id === idWithNoLeadin);
    expect(route1).toBeDefined();
    if (route1) {
      const expected1 = route1.elevation;
      const actual1 = new ZwiftRoute(route1);
      expect(actual1.totalElevationGain).toStrictEqual(expected1);
    }

    // Test with lead-in
    const idWithLeadin = '26eaf3f2-ba6e-436e-a050-fc65c38ecbb2';
    const route2 = staticData.find((r) => r.id === idWithLeadin);
    expect(route2).toBeDefined();
    if (route2) {
      const expected2 = route2.elevation + route2.leadin_elevation;
      const actual2 = new ZwiftRoute(route2);
      expect(actual2.totalElevationGain).toStrictEqual(expected2);
    }
  });

  describe('getZwiftUserData', () => {
    it('can describe user data when no dynamic data is provided', () => {
      const actual = new ZwiftRoute(staticData[0]);
      const expected = { routeId: actual.id, isCompleted: false };
      expect(actual.getZwiftUserData()).toStrictEqual(expected);
    });
    
    it('can describe user data when dynamic data is provided', () => {
      const userData = { routeId: staticData[0].id, isCompleted: true };
      const actual = new ZwiftRoute(staticData[0], userData);
      const expected = { routeId: actual.id, isCompleted: true };
      expect(actual.getZwiftUserData()).toStrictEqual(expected);
    });

    it('can describe updated dynamic data', () => {
      const userData = { routeId: staticData[0].id, isCompleted: true };
      const actual = new ZwiftRoute(staticData[0], userData);
      actual.isCompleted = false;
      const expected = { routeId: actual.id, isCompleted: false };
      expect(actual.getZwiftUserData()).toStrictEqual(expected);
    });
  })

  describe('isMatch', () => {
    it('filters for world', () => {
      const testRoutes = [
        { id: 'f101a72a-f875-4253-bf0e-91a707d4012b', expected: false }, /* Watopia */
        { id: '244833ef-739f-4256-a36f-8d00d3476f1e', expected: true  }, /* London  */
        { id: 'fbefb03b-be7a-4db9-a006-50c25dacd3b7', expected: false }, /* Richmond */
        { id: 'de795c79-3667-4a9c-b766-ea82510fc949', expected: false }, /* New York */
        { id: '83b7ba95-2b19-409e-a220-bc7eae80287c', expected: false }, /* Crit City */
      ];
      const routeFilter: RouteFilter = {
        world: 'London',
        includeCompletedRoutes: false,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: false
      };

      testRoutes.forEach((t) => {
        const data = staticData.find((r) => r.id === t.id);
        expect(data).toBeDefined();
        if (data) {
          const route = new ZwiftRoute(data);
          const actual = route.isMatch(routeFilter);
          expect(actual).toStrictEqual(t.expected);
        }
      });
    });

    it('filters for all worlds', () => {
      const testRoutes = [
        { id: 'f101a72a-f875-4253-bf0e-91a707d4012b', expected: true }, /* Watopia */
        { id: '244833ef-739f-4256-a36f-8d00d3476f1e', expected: true }, /* London  */
        { id: 'fbefb03b-be7a-4db9-a006-50c25dacd3b7', expected: true }, /* Richmond */
        { id: 'de795c79-3667-4a9c-b766-ea82510fc949', expected: true }, /* New York */
        { id: '83b7ba95-2b19-409e-a220-bc7eae80287c', expected: true }, /* Crit City */
      ];
      const routeFilter: RouteFilter = {
        includeCompletedRoutes: true,
        includeEventOnlyRoutes: true,
        includeDefaultWorld: false
      };

      testRoutes.forEach((t) => {
        const data = staticData.find((r) => r.id === t.id);
        expect(data).toBeDefined();
        if (data) {
          const route = new ZwiftRoute(data);
          const actual = route.isMatch(routeFilter);
          expect(actual).toStrictEqual(t.expected);
        }
      });
    });

    it('filters for world + default', () => {
      const testRoutes = [
        { id: 'f101a72a-f875-4253-bf0e-91a707d4012b', expected: true  }, /* Watopia */
        { id: '244833ef-739f-4256-a36f-8d00d3476f1e', expected: true  }, /* London  */
        { id: 'fbefb03b-be7a-4db9-a006-50c25dacd3b7', expected: false }, /* Richmond */
        { id: 'de795c79-3667-4a9c-b766-ea82510fc949', expected: false }, /* New York */
        { id: '83b7ba95-2b19-409e-a220-bc7eae80287c', expected: false }, /* Crit City */
      ];
      const routeFilter: RouteFilter = {
        world: 'London',
        includeCompletedRoutes: true,
        includeEventOnlyRoutes: true,
        includeDefaultWorld: true
      };

      testRoutes.forEach((t) => {
        const data = staticData.find((r) => r.id === t.id);
        expect(data).toBeDefined();
        if (data) {
          const route = new ZwiftRoute(data);
          const actual = route.isMatch(routeFilter);
          expect(actual).toStrictEqual(t.expected);
        }
      });
    });

    it('filters for all worlds + default', () => {
      const testRoutes = [
        { id: 'f101a72a-f875-4253-bf0e-91a707d4012b', expected: true }, /* Watopia */
        { id: '244833ef-739f-4256-a36f-8d00d3476f1e', expected: true }, /* London  */
        { id: 'fbefb03b-be7a-4db9-a006-50c25dacd3b7', expected: true }, /* Richmond */
        { id: 'de795c79-3667-4a9c-b766-ea82510fc949', expected: true }, /* New York */
        { id: '83b7ba95-2b19-409e-a220-bc7eae80287c', expected: true }, /* Crit City */
      ];
      const routeFilter: RouteFilter = {
        includeCompletedRoutes: true,
        includeEventOnlyRoutes: true,
        includeDefaultWorld: true
      };

      testRoutes.forEach((t) => {
        const data = staticData.find((r) => r.id === t.id);
        expect(data).toBeDefined();
        if (data) {
          const route = new ZwiftRoute(data);
          const actual = route.isMatch(routeFilter);
          expect(actual).toStrictEqual(t.expected);
        }
      });
    });

    it('filters for all sports', () => {
      const testData = [ 
        { data: { ...staticData[0], sports: 'all'     }, expected: true },
        { data: { ...staticData[0], sports: 'cycling' }, expected: true },
        { data: { ...staticData[0], sports: 'running' }, expected: true }
      ];
      const routeFilter: RouteFilter = {
        includeCompletedRoutes: false,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: true
      };

      testData.forEach((t) => {
        const route = new ZwiftRoute(t.data);
        const actual = route.isMatch(routeFilter);
        expect(actual).toStrictEqual(t.expected);
      });
    });

    it('filters for sport = cycling', () => {
      const testData = [ 
        { data: { ...staticData[0], sports: 'all'     }, expected: true  },
        { data: { ...staticData[0], sports: 'cycling' }, expected: true  },
        { data: { ...staticData[0], sports: 'running' }, expected: false }
      ];
      const routeFilter: RouteFilter = {
        sport: ZwiftSport.Cycling,
        includeCompletedRoutes: false,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: true
      };

      testData.forEach((t) => {
        const route = new ZwiftRoute(t.data);
        const actual = route.isMatch(routeFilter);
        expect(actual).toStrictEqual(t.expected);
      });
    });

    it('filters for sport = running', () => {
      const testData = [ 
        { data: { ...staticData[0], sports: 'all'     }, expected: true  },
        { data: { ...staticData[0], sports: 'cycling' }, expected: false },
        { data: { ...staticData[0], sports: 'running' }, expected: true  }
      ];
      const routeFilter: RouteFilter = {
        sport: ZwiftSport.Running,
        includeCompletedRoutes: false,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: true
      };

      testData.forEach((t) => {
        const route = new ZwiftRoute(t.data);
        const actual = route.isMatch(routeFilter);
        expect(actual).toStrictEqual(t.expected);
      });
    });

    it('filters for includeCompletedRoutes', () => {
      const route = new ZwiftRoute(staticData[0]);
      const routeFilter: RouteFilter = {
        includeCompletedRoutes: true,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: true
      };

      // isCompleted = false
      expect(route.isMatch(routeFilter)).toStrictEqual(true);

      // isCompleted = true
      route.isCompleted = true;
      expect(route.isMatch(routeFilter)).toStrictEqual(true);
    });

    it('filters for !includeCompletedRoutes', () => {
      const route = new ZwiftRoute(staticData[0]);
      const routeFilter: RouteFilter = {
        includeCompletedRoutes: false,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: true
      };

      // isCompleted = false
      expect(route.isMatch(routeFilter)).toStrictEqual(true);

      // isCompleted = true
      route.isCompleted = true;
      expect(route.isMatch(routeFilter)).toStrictEqual(false);
    });

    it('filters for includeEventOnly', () => {
      const testRoutes = [
        { id: 'f101a72a-f875-4253-bf0e-91a707d4012b', expected: true }, /* Watopia */
        { id: '244833ef-739f-4256-a36f-8d00d3476f1e', expected: true }, /* London  */
        { id: 'fbefb03b-be7a-4db9-a006-50c25dacd3b7', expected: true }, /* Richmond */
        { id: 'de795c79-3667-4a9c-b766-ea82510fc949', expected: true }, /* New York */
        { id: '83b7ba95-2b19-409e-a220-bc7eae80287c', expected: true }, /* Crit City */
      ];
      const routeFilter: RouteFilter = {
        includeCompletedRoutes: true,
        includeEventOnlyRoutes: true,
        includeDefaultWorld: false
      };

      testRoutes.forEach((t) => {
        const data = staticData.find((r) => r.id === t.id);
        expect(data).toBeDefined();
        if (data) {
          const route = new ZwiftRoute(data);
          const actual = route.isMatch(routeFilter);
          expect(actual).toStrictEqual(t.expected);
        }
      });
    });

    it('filters for !includeEventOnly', () => {
      const testRoutes = [
        { id: 'f101a72a-f875-4253-bf0e-91a707d4012b', expected: true }, /* Watopia */
        { id: '244833ef-739f-4256-a36f-8d00d3476f1e', expected: true }, /* London  */
        { id: 'fbefb03b-be7a-4db9-a006-50c25dacd3b7', expected: false }, /* Richmond */
        { id: 'de795c79-3667-4a9c-b766-ea82510fc949', expected: true }, /* New York */
        { id: '83b7ba95-2b19-409e-a220-bc7eae80287c', expected: false }, /* Crit City */
      ];
      const routeFilter: RouteFilter = {
        includeCompletedRoutes: true,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: false
      };

      testRoutes.forEach((t) => {
        const data = staticData.find((r) => r.id === t.id);
        expect(data).toBeDefined();
        if (data) {
          const route = new ZwiftRoute(data);
          const actual = route.isMatch(routeFilter);
          expect(actual).toStrictEqual(t.expected);
        }
      });
    });

    it('filters for maximumZwiftLevel', () => {
      const testRoutes = [
        { id: '609fd056-c90d-4355-a807-30add054eb7d', expected: false }, /* level=10 */
        { id: '5d6a7135-6cd2-4171-b41f-ac9a75465ed0', expected: true } /* level=0  */
      ];
      const routeFilter: RouteFilter = {
        includeCompletedRoutes: false,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: false,
        maximumZwiftLevel: 5
      };

      testRoutes.forEach((t) => {
        const data = staticData.find((r) => r.id === t.id);
        expect(data).toBeDefined();
        if (data) {
          const route = new ZwiftRoute(data);
          const actual = route.isMatch(routeFilter);
          expect(actual).toStrictEqual(t.expected);
        }
      });
    });

    it('handles complex filters', () => {
      /* Filter London+Watopia, with max level = 5, but only cycling routes */
      /* In the current data set, there are 43 of these */
      const routes = staticData.map((r) => new ZwiftRoute(r));
      const routeFilter: RouteFilter = {
        world: 'London',
        sport: ZwiftSport.Cycling,
        includeCompletedRoutes: false,
        includeEventOnlyRoutes: false,
        includeDefaultWorld: true,
        maximumZwiftLevel: 5
      };
      const actuals = routes.filter((r) => r.isMatch(routeFilter));
      expect(actuals.length).toStrictEqual(32);
    });
  });
});