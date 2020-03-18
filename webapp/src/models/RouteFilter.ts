import ZwiftSport from './ZwiftSport';

/**
 * Definition of the filters that can be applied to the 
 * route list.
 */
export default interface RouteFilter {
  /**
   * Filter by the Zwift World.  If set, matches zwiftWorld.
   */
  world?: string;

  /**
   * Filter by the Sport.  If set, matches 
   */
  sport?: ZwiftSport;

  /**
   * Include completed routes in the set.
   */
  includeCompletedRoutes: boolean;

  /**
   * Include event only routes in the set.
   */
  includeEventOnlyRoutes: boolean;
  
  /**
   * Include the default world (Watopia) in the list.
   */
  includeDefaultWorld: boolean;

  /**
   * Include if the route if above the minimum route.
   */
  maximumZwiftLevel?: number;
}
