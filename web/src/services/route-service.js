import Dexie from 'dexie';

/**
 * Route State Service provides load/save facilities of the route
 * state.  Under the covers, this uses IndexedDB on the browser to
 * store the results.
 *
 * The `loadRouteState()` method is called once at the start of the
 * application.  The `saveRouteState() method is called each time a
 * route is completed (or the completion flag is cleared)
 */
class RouteStateService {
  constructor() {
    this.database = new Dexie('zwiftroutes');
    this.database.version(1).stores({
      routeState: '&routeId,isCompleted'
    });
  }

  /**
   * Loads the route state for each route recorded.
   *
   * Result is
   *  a) an error
   *  b) an array of elements like this:
   *
   * { routeId: 'someid', isCompleted: true }
   *
   * If everything is working, but there are no results, then
   * an empty array is returned.
   */
  async loadRouteState() {
    const response = await this.database.routeState.toArray();
    return response;
  }

  /**
   * Saves a specific route state to the database.
   *
   * @param action the action that caused the save.
   */
  async saveRouteState(action) {
    const obj = {
      routeId: action.routeId,
      isCompleted: action.routeUpdate.isCompleted
    };
    await this.database.routeState.put(obj);
  }
}

const routeServiceClient = new RouteStateService();

export default routeServiceClient;
