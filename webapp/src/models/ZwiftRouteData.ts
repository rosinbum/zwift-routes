/**
 * Definition for the static user data that is stored in routes.json
 */
export default interface ZwiftRouteData {
  /**
   * The unique ID for the route.
   */
  id: string;

  /**
   * The VeloViewer difficulty rating
   */
  difficulty: number;

  /**
   * The route distance (in km).
   */
  distance: number;

  /**
   * The elevation gain for the route (in m).
   */
  elevation: number;

  /**
   * True if this route is available only in events.
   */
  eventonly: boolean;

  /**
   * The distance from the drop-point to the route start (in km).
   */
  leadin_distance: number;

  /**
   * The elevation gain from the drop-point to the route start (in m).
   */
  leadin_elevation: number;

  /**
   * Minimum Zwift level required to use this route (default: 0)
   */
  level?: number;

  /**
   * Optional link to the Zwift Insider page for this route.
   */
  link?: string;
  
  /**
   * Name of the route on Zwift.
   */
  name: string;

  /**
   * The sports that this route applies to.
   */
  sports?: string;

  /**
   * The Zwift World that holds this route.
   */
  world: string;
}


