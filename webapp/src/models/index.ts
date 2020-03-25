import capitalize from 'lodash/capitalize';

/**
 * Possible values for the display-units.  Either imperial (miles and feet),
 * or metric (kilometers and meters).
 */
export enum DisplayUnits {
  Imperial            = 'imperial',
  Metric              = 'metric'
}

/**
 * Possible values for the list sort direction - ascending or descending.
 */
export enum SortDirection {
  Ascending           = 'ascending',
  Descending          = 'descending'
}

/**
 * Possible values for the sort field.
 */
export enum SortField { 
  Name                = 'name',
  Difficulty          = 'difficulty',
  RouteDistance       = 'routeDistance',
  RouteElevationGain  = 'routeElevationGain',
  TotalDistance       = 'totalDistance',
  TotalElevationGain  = 'totalElevationGain'
}

/**
 * List of potential sports that can be done on Zwift.
 */
export enum ZwiftSport {
  AllSports           = '*',
  Cycling             = 'cycling',
  Running             = 'running'
}

/**
 * Definition of the display settings to use.
 */
export interface DisplaySettings {
  units: DisplayUnits;
}

/**
 * Definition of a filter used to limit the number of routes in the list.
 */
export interface RouteFilter {
  world?: string;
  sport?: ZwiftSport;
  includeCompletedRoutes: boolean;
  includeEventOnlyRoutes: boolean;
  includeDefaultWorld: boolean;
  maximumZwiftLevel?: number;
}

/**
 * When we sort, we sort by a field and direction.
 */
export interface SortOrder {
  sortField: SortField;
  sortDirection: SortDirection;
}

/**
 * The format of a single routes.json entry.
 */
export interface ZwiftRouteData {
  id: string;
  difficulty: number;
  distance: number;
  elevation: number;
  eventonly: boolean;
  leadin_distance: number;
  leadin_elevation: number;
  level?: number;
  link?: string;
  name: string;
  sports?: string;
  world: string;
}

/**
 * The format of the data written to / read from the IndexedDB
 */
export interface ZwiftUserData {
  routeId: string;
  isCompleted: boolean;
}

/**
 * A ZwiftRoute combines the static data from the routes.json file and
 * the dynamic data from the IndexedDB.
 */
export class ZwiftRoute {
  readonly id: string;
  
  readonly difficulty: number;
  isCompleted: boolean;
  readonly isEventOnly: boolean;
  readonly isForCycling: boolean;
  readonly isForRunning: boolean;
  readonly leadinDistance: number;
  readonly leadinElevationGain: number;
  readonly minimumZwiftLevel: number;
  readonly routeDistance: number;
  readonly routeElevationGain: number;
  readonly routeName: string;
  readonly totalDistance: number;
  readonly totalElevationGain: number;
  readonly zwiftInsiderLink?: URL;
  readonly zwiftWorld: string;

  constructor(staticData: ZwiftRouteData, dynamicData?: ZwiftUserData) {
    const sport = (staticData.sports || 'all').toLowerCase();

    this.id = staticData.id;
    this.difficulty = staticData.difficulty;
    this.isCompleted = dynamicData?.isCompleted || false;
    this.isEventOnly = staticData.eventonly;
    this.isForCycling = sport === 'all' || sport === 'cycling';
    this.isForRunning = sport === 'all' || sport === 'running';
    this.leadinDistance = staticData.leadin_distance;
    this.leadinElevationGain = staticData.leadin_elevation;
    this.minimumZwiftLevel = staticData.level || 0;
    this.routeDistance = staticData.distance;
    this.routeElevationGain = staticData.elevation;
    this.routeName = staticData.name;
    this.totalDistance = staticData.leadin_distance + staticData.distance;
    this.totalElevationGain = staticData.leadin_elevation + staticData.elevation;

    const w = staticData.world.split(/\s+/);
    this.zwiftWorld = w.map((word) => capitalize(word)).join(' ');

    if (staticData.link) {
      this.zwiftInsiderLink = new URL(staticData.link);
    }
  }

  /**
   * Gets the dynamic data for a route.
   */
  getZwiftUserData(): ZwiftUserData {
    return { routeId: this.id, isCompleted: this.isCompleted };
  }

  /**
   * Checks to see if a route needs to be included or excluded based on 
   * filter criteria.
   * 
   * @param filter the RouteFilter to use
   * @returns true if it is to be included; false if excluded.
   */
  isMatch(filter: RouteFilter): boolean {
    if (filter.world && filter.world !== '*') {
      const worldSet = [ filter.world ];
      if (filter.includeDefaultWorld) worldSet.push('Watopia');
      if (!worldSet.includes(this.zwiftWorld)) return false;
    }

    if (filter.sport && filter.sport !== ZwiftSport.AllSports) {
      if (filter.sport === ZwiftSport.Cycling && !this.isForCycling) return false;
      if (filter.sport === ZwiftSport.Running && !this.isForRunning) return false;
    }

    if (filter.maximumZwiftLevel) {
      if (this.minimumZwiftLevel >= filter.maximumZwiftLevel) return false;
    }

    if (!filter.includeCompletedRoutes && this.isCompleted) return false;
    if (!filter.includeEventOnlyRoutes && this.isEventOnly) return false;

    return true;
  }
}

