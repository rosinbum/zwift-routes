import capitalize from 'lodash/capitalize';
import ZwiftUserData from './ZwiftUserData';
import RouteFilter from './RouteFilter';
import ZwiftSport from './ZwiftSport';
import ZwiftRouteData from './ZwiftRouteData'

/**
 * The model for a single ZwiftRoute
 */
export default class ZwiftRoute {
  private staticData: ZwiftRouteData;
  private dynamicData: ZwiftUserData;
  private sport: string;

  constructor(staticData: ZwiftRouteData, dynamicData?: ZwiftUserData) {
    this.staticData = staticData;
    this.dynamicData = dynamicData || { routeId: this.staticData.id, isCompleted: false };
    this.sport = this.staticData.sports || 'all';
  }
  
  /**
   * Capitalize each word in a string.
   * 
   * @param s the input string
   */
  private capWords(s: string): string {
    const w = s.split(/\s+/);
    return w.map((word) => capitalize(word)).join(' ');
  }

  /**
   * Returns the unique ID for the route
   */
  get id(): string {
    return this.staticData.id;
  }

  /**
   * Returns the VeloViewer difficulty rating.
   */
  get difficulty(): number {
    return this.staticData.difficulty;
  }

  /**
   * Returns true if the user has completed the ride
   */
  get isCompleted(): boolean {
    return this.dynamicData.isCompleted;
  }

  /**
   * Sets or clears the user completion flag
   */
  set isCompleted(value: boolean) {
    this.dynamicData.isCompleted = value;
  }

  /**
   * Returns true if this route can only be used during events.
   */
  get isEventOnly(): boolean {
    return this.staticData.eventonly;
  }

  /**
   * Returns true if you can ride a bike on this route.
   */
  get isForCycling(): boolean {
    return this.sport === 'all' || this.sport === 'cycling';
  }

  /**
   * Returns true if you can run on this route.
   */
  get isForRunning(): boolean {
    return this.sport === 'all' || this.sport === 'running';
  }

  /**
   * Returns the distance from the drop-point to the route start (in km).
   */
  get leadinDistance(): number {
    return this.staticData.leadin_distance;
  }

  /**
   * Returns the elevation gain from the drop-point to the route start (in m).
   */
  get leadinElevationGain(): number {
    return this.staticData.leadin_elevation;
  }

  /**
   * The minimum level required to use this route.
   */
  get minimumZwiftLevel(): number {
    return this.staticData.level || 0;
  }

  /**
   * The official distance (start to end) of the route (in km).
   */
  get routeDistance(): number {
    return this.staticData.distance;
  }

  /**
   * The official elevation gain (start to end) of the route (in m).
   */
  get routeElevationGain(): number {
    return this.staticData.elevation;
  }

  /**
   * The official name of the route.
   */
  get routeName(): string {
    return this.staticData.name;
  }

  /**
   * The total distance (including lead-in) needed to complete this ride, in km.
   */
  get totalDistance(): number {
    return this.staticData.leadin_distance + this.staticData.distance;
  }

  /**
   * The total elevation gain (including lead-in) needed to complete 
   * this ride, in m.
   */
  get totalElevationGain(): number {
    return this.staticData.leadin_elevation + this.staticData.elevation;
  }

  /**
   * The URL to the Zwift Insider route description, or undefined if it
   * doesn't exist.
   */
  get zwiftInsiderLink(): string | undefined {
    return this.staticData.link;
  }

  /**
   * The name of the world.  We normalize the world name such that each
   * world name is capitalized, to allow for proper sorting and comparison.
   */
  get zwiftWorld(): string {
    return this.capWords(this.staticData.world);
  }

  /**
   * Returns the ZwiftUserData for this object.  This is used when storing
   * the data.
   */
  getZwiftUserData(): ZwiftUserData {
    return {
      routeId: this.id,
      isCompleted: this.isCompleted
    };
  }

  /**
   * Determines if this route is a match for the provided filter
   * 
   * @param filter the route filter to compare this route to
   * @returns true if this route matches the filter.
   */
  isMatch(filter: RouteFilter): boolean {
    // The general process is to escape out (return false) if something
    // doesn't match - if everything matches, then return true.
    if (filter.world) {
      const worldSet = [ filter.world ];
      if (filter.includeDefaultWorld) worldSet.push('Watopia');
      if (!worldSet.includes(this.zwiftWorld)) {
        return false;
      }
    }

    if (filter.sport && filter.sport === ZwiftSport.Cycling && !this.isForCycling) {
      return false;
    }

    if (filter.sport && filter.sport === ZwiftSport.Running && !this.isForRunning) {
      return false;
    }

    if (!filter.includeCompletedRoutes && this.isCompleted) {
      return false;
    }

    if (!filter.includeEventOnlyRoutes && this.isEventOnly) {
      return false;
    }

    if (filter.maximumZwiftLevel && this.minimumZwiftLevel >= filter.maximumZwiftLevel) {
      return false;
    }
    
    return true;
  }
}
