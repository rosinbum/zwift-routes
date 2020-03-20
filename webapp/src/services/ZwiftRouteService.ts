import { ZwiftUserService } from './internal-types';
import { ZwiftRoute, ZwiftRouteData } from '../models';
import staticRouteData from './data/routes.json';

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
    const allUserData = await this.userService.getAllUserData();
    const result = this.sourceData.map((routeData) => {
      const dynamicData = allUserData.find((r) => r.routeId === routeData.id);
      return new ZwiftRoute(routeData, dynamicData);
    });
    return result;
  }

  /**
   * Returns the route data for a single route (asynchronously).
   * 
   * @param id the ID of the route to return.
   * @returns the route or undefined if the route does not exist.
   */
  async getZwiftRoute(id: string): Promise<ZwiftRoute | undefined> {
    const routeData = this.sourceData.find((r) => r.id === id);
    if (!routeData) return undefined;
    const dynamicData = await this.userService.getUserData(id);
    return new ZwiftRoute(routeData, dynamicData);
  }

  /**
   * Stores the zwift route dynamic data within the data store.
   * 
   * @param route the route to store.
   */
  async storeZwiftRoute(route: ZwiftRoute): Promise<void> {
    const userData = route.getZwiftUserData();
    await this.userService.setUserData(userData);
  }
}
