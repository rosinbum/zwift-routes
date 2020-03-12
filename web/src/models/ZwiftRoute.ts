import RouteUpdates from './RouteUpdates';
import startCase from 'lodash/startCase';

/**
 * The details of a route in the Zwift World
 */
export default interface ZwiftRoute {
  /**
   * A unique ID for this route.
   */
  readonly id: string;

  /**
   * Difficulty of the route
   */
  readonly difficulty: number;

  /**
   * Determines if the route is completed or not.
   */
  readonly isCompleted: boolean;

  /**
   * True if the route is an "event only" route.
   */
  readonly isEventOnly: boolean;

  /**
   * True if the route is for cycling
   */
  readonly isForCycling: boolean;

  /**
   * True if the route is for running
   */
  readonly isForRunning: boolean;

  /**
   * The distance from the drop-point to the start of the route in km.
   */
  readonly leadinDistance: number;

  /**
   * The elevation gain from the drop-point to the start of the route in m.
   */
  readonly leadinElevation: number;

  /**
   * The minimum required level to ride this route
   */
  readonly minimumZwiftLevel: number;

  /**
   * The name that Zwift uses to identify this route
   */
  readonly name: string

  /**
   * The official distance of the route in km.
   */
  readonly routeDistance: number

  /**
   * The official elevation gain of the route in m.
   */
  readonly routeElevation: number

  /**
   * The total distance to complete the route in km (including lead-in)
   */
  readonly totalDistance: number;

  /**
   * The total elevation gain to complete the route in m
   */
  readonly totalElevation: number;

  /**
   * The link to the ZwiftInsider route page - will be the empty string
   * if the link does not exist.
   */
  readonly zwiftInsiderLink: string

  /**
   * The name of the world (should be startCase)
   */
  readonly zwiftWorld: string

  /**
   * Updates the record, only using the RouteUpdates.
   * 
   * @param instructions the instructions to show the update
   */
  updateRoute(instructions: RouteUpdates): void
}

/**
 * Description of a single record in the routes.json file - only used
 * when loading the routes.json file.
 */
export interface ZwiftRouteInput {
  id: string;
  difficulty?: number;
  distance: number;
  elevation: number;
  eventonly: boolean;
  leadin_distance: number;
  leadin_elevation: number;
  level: number;
  link?: string;
  name: string;
  sports: string;
  world: string;
}

/**
 * The implementation of the ZwiftRoute with all the necessary pieces
 * to run the application.
 */
export class ZwiftRouteImpl implements ZwiftRoute {
  private data: ZwiftRouteInput;
  private hasCompletedRoute: boolean = false;

  /**
   * The only way to create a route is to get it from routes.json
   * 
   * @param json the JSON data from routes.json
   */
  constructor(json: ZwiftRouteInput) {
    this.data = json;
    this.data.sports = json.sports.toLowerCase();
    this.data.world = startCase(json.world);
  }

  /**
   * The ID of the Zwift Route - should be unique in the set.
   */
  get id(): string { 
    return this.data.id; 
  }

  /**
   * The VeloViewer difficulty rating - not all routes have one,
   * so if it isn't present, return 0
   */
  get difficulty(): number {
    return this.data.difficulty || 0;
  }

  /**
   * True is the user has completed the route.
   */
  get isCompleted(): boolean {
    return this.hasCompletedRoute;
  }

  /**
   * True if the route is an "event only" route.
   */
  get isEventOnly(): boolean {
    return this.data.eventonly;
  }

  /**
   * True if the route is for cycling.
   */
  get isForCycling(): boolean {
    return this.data.sports === 'all' || this.data.sports === 'cycling';
  }

  /**
   * True if the route is for running
   */
  get isForRunning(): boolean {
    return this.data.sports === 'all' || this.data.sports === 'cycling';
  }

  /**
   * Returns the lead-in distance, in km.
   */
  get leadinDistance(): number {
    return this.data.leadin_distance;
  }

  /**
   * Returns the lead-in elevation gain, in m.
   */
  get leadinElevation(): number {
    return this.data.leadin_elevation;
  }

  /**
   * Returns the minimum zwift level needed to run/ride this route
   */
  get minimumZwiftLevel(): number {
    return this.data.level;
  }

  /**
   * Returns the official name of the route.
   */
  get name(): string {
    return this.data.name;
  }

  /**
   * Returns the official route distance, in km.
   */
  get routeDistance(): number {
    return this.data.distance;
  }

  /**
   * Returns the official route elevation gain, in m.
   */
  get routeElevation(): number {
    return this.data.elevation;
  }

  /**
   * Returns the total distance (including lead-in), in km.
   */
  get totalDistance(): number {
    return this.data.leadin_distance + this.data.distance;
  }

  /**
   * Returns the total elevation gain (including lead-in), in m.
   */
  get totalElevation(): number {
    return this.data.leadin_elevation + this.data.elevation;
  }

  /**
   * Returns the name of the zwift world that contains the route
   */
  get zwiftWorld(): string {
    return this.data.world;
  }

  /**
   * Returns the Zwift Insider link, or '' (empty string)
   */
  get zwiftInsiderLink(): string {
    return this.data.link || '';
  }
  
  /**
   * Updates the route.  Only certain fields can be updated.
   * 
   * @param instructions the route update instructions
   */
  updateRoute(instructions: RouteUpdates): void {
    // Juggling check - handles both null and undefined
    if (instructions.isCompleted != null) {
      this.hasCompletedRoute = instructions.isCompleted;
      delete instructions.isCompleted;
    }

    // The rest of the object should now be empty!  We
    // only support setting isCompleted right now.
  }
}
