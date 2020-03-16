import { ZwiftUserService } from './internal-types';
import { ZwiftRouteData } from 'models/internal-types';
import ZwiftRoute from 'models/ZwiftRoute';
import staticRouteData from '@assets/routes.json';

/**
 * Stores and retrieves the route data from the backing store(s).  The route
 * data is comprised of both static and dynamic data.
 */
export default class ZwiftRouteService {
  private userService: ZwiftUserService;
  private sourceData: ZwiftRouteData[];

  /**
   * Creates a new ZwiftRouteService.
   * 
   * @param userService the service used to store and retrieve the dynamic data
   * @param sourceData the source data for the static data store.
   */
  constructor(userService: ZwiftUserService, sourceData?: ZwiftRouteData[]) {
    this.userService = userService;
    this.sourceData = sourceData || staticRouteData;
  }

  /**
   * Receives all the routes, including dynamic data, asynchronously.
   * 
   * @returns the list of routes (async)
   */
  async getAllZwiftRoutes(): Promise<ZwiftRoute[]> {
    throw new Error('not implemented');
  }

  /**
   * Returns the route data for a single route (asynchronously).
   * 
   * @param id the ID of the route to return.
   * @returns the route or undefined if the route does not exist.
   */
  async getZwiftRoute(id: string): Promise<ZwiftRoute> {
    throw new Error('not implemented');
  }

  /**
   * Stores the zwift route dynamic data within the data store.
   * 
   * @param route the route to store.
   */
  async storeZwiftRoute(route: ZwiftRoute): Promise<void> {
    throw new Error('not implemented');
  }
}
