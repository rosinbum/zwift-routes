/* eslint-env jest */
import { ZwiftRoute, ZwiftSport, DisplayUnits, SortDirection, SortField } from 'src/models';
import { FluxAction } from 'src/redux/types';
import staticData from 'src/data/routes.json';

import appReducer from 'src/redux/modules/app/reducer';
import AppState from 'src/redux/modules/app/state';
import routeReducer from 'src/redux/modules/route/reducer';
import * as actions from 'src/redux/actions';

const invalidAction: FluxAction = { type: '@@invalid' };
const allRoutes = staticData.map((r) => new ZwiftRoute(r));
const currentAppState: AppState = {
  requests: 20,
  error: new Error('test data'),
  display: { 
    units: DisplayUnits.Metric 
  },
  filter: {
    includeCompletedRoutes: false,
    includeDefaultWorld: true,
    includeEventOnlyRoutes: true
  },
  sortOrder: {
    sortDirection: SortDirection.Descending,
    sortField: SortField.Name
  }
};
const sampleData =   {
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

describe('redux', () => {
  describe('actions', () => {
    it('can create a clearError action', () => {
      expect(actions.clearError()).toStrictEqual({ type: 'app.clear-error' });
    });

    it('can create a setDisplay action', () => {
      const actual = actions.setDisplay({ units: DisplayUnits.Imperial });
      expect(actual).toStrictEqual({
        type: 'app.set-display',
        payload: { units: DisplayUnits.Imperial }
      });
    });

    it('can create a setError action', () => {
      const actual = actions.setError(new Error('test-action'));
      expect(actual.type).toStrictEqual('app.set-error');
      expect(actual.error?.message).toStrictEqual('test-action');
    });

    it('can create a setFilter action', () => {
      const actual = actions.setFilter(currentAppState.filter);
      expect(actual.type).toStrictEqual('app.set-filter');
      expect(actual.payload).toStrictEqual(currentAppState.filter);
    });

    it('can create a setSort action', () => {
      const actual = actions.setSort(currentAppState.sortOrder);
      expect(actual.type).toStrictEqual('app.set-sort');
      expect(actual.payload).toStrictEqual(currentAppState.sortOrder);
    });

    it('can create a startRequest action', () => {
      expect(actions.startRequest()).toStrictEqual({ type: 'app.start-request' });
    });

    it('can create a stopRequest action', () => {
      expect(actions.stopRequest()).toStrictEqual({ type: 'app.stop-request' });
    });

    it('can create a loadRoutes action', () => {
      const actual = actions.loadRoutes(allRoutes);
      expect(actual.type).toStrictEqual('route.load-routes');
      expect(actual.payload).toBeInstanceOf(Array);
      expect(actual.payload.length).toStrictEqual(allRoutes.length);
    });

    it('can create a updateRoute action', () => {
      const actual = actions.updateRouteInStore(allRoutes[0]);
      expect(actual.type).toStrictEqual('route.update-route');
      expect(actual.payload).toBeInstanceOf(ZwiftRoute);
      expect(actual.payload.id).toStrictEqual(allRoutes[0].id);
    });
  });

  describe('app reducer', () => {
    it('sets initial state', () => {
      const actual = appReducer(undefined, invalidAction);
      expect(actual).toBeDefined();
      expect(actual.requests).toStrictEqual(0);
      expect(actual.display.units).toStrictEqual(DisplayUnits.Imperial);
      expect(actual.error).not.toBeDefined();
    });

    it('returns same state on unhandled actions', () => {
      const actual = appReducer(currentAppState, invalidAction);
      expect(actual).toBeDefined();
      expect(actual).toStrictEqual(currentAppState);
    });

    it('handles startRequest action properly', () => {
      const actual = appReducer(currentAppState, actions.startRequest());
      expect(actual.requests).toStrictEqual(21);
    });

    it('handles stopRequest action properly', () => {
      const actual = appReducer(currentAppState, actions.stopRequest());
      expect(actual.requests).toStrictEqual(19);
    });
    
    it('handles setError action properly', () => {
      const actual = appReducer(currentAppState, actions.setError(new Error('test-action')));
      expect(actual.error?.message).toStrictEqual('test-action');
    });
    
    it('handles clearError action properly', () => {
      const actual = appReducer(currentAppState, actions.clearError());
      expect(actual.error).not.toBeDefined();
    });
    
    it('handles setDisplay action properly', () => {
      const action = actions.setDisplay({ units: DisplayUnits.Imperial });
      const actual = appReducer(currentAppState, action);
      expect(actual.display.units).toStrictEqual(DisplayUnits.Imperial);
    });
    
    it('handles setFilter action properly', () => {
      const action = actions.setFilter({
        world: 'London',
        sport: ZwiftSport.Cycling,
        includeCompletedRoutes: false,
        includeDefaultWorld: true,
        includeEventOnlyRoutes: false
       });
      const actual = appReducer(currentAppState, action);
      expect(actual.filter.world).toStrictEqual('London');
    });
    
    it('handles setSortOrder action properly', () => {
      const action = actions.setSort({
        sortField: SortField.TotalElevationGain,
        sortDirection: SortDirection.Ascending
      });
      const actual = appReducer(currentAppState, action);
      expect(actual.sortOrder.sortField).toStrictEqual(SortField.TotalElevationGain);
      expect(actual.sortOrder.sortDirection).toStrictEqual(SortDirection.Ascending);
    });    
  });

  describe('routes reducer', () => {
    it('sets initial state', () => {
      const actual = routeReducer(undefined, invalidAction);
      expect(actual).toBeInstanceOf(Array);
      expect(actual).toHaveLength(0);
    });

    it('returns same state on unhandled actions', () => {
      const actual = routeReducer(allRoutes, invalidAction);
      expect(actual).toBeInstanceOf(Array);
      expect(actual).toStrictEqual(allRoutes);
    });

    it('can load routes from an uninitialized store', () => {
      const action = actions.loadRoutes(allRoutes);
      const actual = routeReducer(undefined, action);
      expect(actual).toBeInstanceOf(Array);
      expect(actual).toStrictEqual(allRoutes);
    });

    it('can load routes from a newly created store', () => {
      const action = actions.loadRoutes(allRoutes);
      const actual = routeReducer([], action);
      expect(actual).toBeInstanceOf(Array);
      expect(actual).toStrictEqual(allRoutes);
    });

    it('can load routes from a store in progress', () => {
      const action = actions.loadRoutes(allRoutes);
      const actual = routeReducer([ allRoutes[0] ], action);
      expect(actual).toBeInstanceOf(Array);
      expect(actual).toStrictEqual(allRoutes);
    });

    it('can handle replaceRoute with an invalid route', () => {
      const action = actions.updateRouteInStore(new ZwiftRoute(sampleData));
      const actual = routeReducer(allRoutes, action);
      expect(actual).toBeInstanceOf(Array);
      expect(actual).toStrictEqual(allRoutes);
    });

    it('can handle replaceRoute with a valid route', () => {
      const routeToBeUpdated = new ZwiftRoute(staticData[10]);
      routeToBeUpdated.isCompleted = true;
      const actual = routeReducer(allRoutes, actions.updateRouteInStore(routeToBeUpdated));
      expect(actual).toBeInstanceOf(Array);
      expect(actual).not.toStrictEqual(allRoutes);
      const updatedRoute = actual.find((r) => r.id === routeToBeUpdated.id);
      expect(updatedRoute).toBeInstanceOf(ZwiftRoute);
      expect(updatedRoute?.isCompleted).toStrictEqual(true);
    });
  });

  //
  // The store relies on the fact that indexedDB is present, so we
  // can't test it outside of that.
  //
  // describe('store', () => {
  //   // Not a lot we can do in terms of testing because of persistence.
  //   // Ensure both store and persistor are the right shape.
  //   it('defines store', () => {
  //     expect(store).toBeDefined();
  //     expect(typeof store.dispatch).toBe('function');
  //     expect(typeof store.getState).toBe('function');
  //   });

  //   it('defines persistor', () => {
  //     expect(persistor).toBeDefined();
  //     expect(typeof persistor.purge).toBe('function');
  //     expect(typeof persistor.flush).toBe('function');
  //     expect(typeof persistor.pause).toBe('function');
  //     expect(typeof persistor.persist).toBe('function');
  //   });
  // });
});
