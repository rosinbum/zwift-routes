import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';

/**
 * Definition of the ZwiftRoute for PropTypes purposes.
 */
export const ZwiftRoutePropTypes = {
  id: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isEventOnly: PropTypes.bool.isRequired,
  isForCycling: PropTypes.bool.isRequired,
  isForRunning: PropTypes.bool.isRequired,
  leadinDistance: PropTypes.number.isRequired,
  leadinElevationGain: PropTypes.number.isRequired,
  minimumZwiftLevel: PropTypes.number.isRequired,
  routeName: PropTypes.string.isRequired,
  routeDistance: PropTypes.number.isRequired,
  routeElevationGain: PropTypes.number.isRequired,
  totalDistance: PropTypes.number.isRequired,
  totalElevationGain: PropTypes.number.isRequired,
  zwiftInsiderLink: PropTypes.string.isRequired,
  zwiftWorld: PropTypes.string.isRequired
};

/**
 * Definition of a Zwift Route.
 */
export default class ZwiftRoute {
  /**
   * Creates a new ZwiftRoute based on the one of the objects received from
   * downloading the routes.json file.
   *
   * @param {ZwiftRouteInput} jsonObject an entry from the routes.json file
   */
  constructor(jsonObject) {
    this.data = jsonObject;
    this.data.sports = jsonObject.sports.toLowerCase();
    this.data.world = startCase(jsonObject.world);
    this.hasCompletedRoute = false;
  }

  /**
   * @return the unique ID of the route.
   */
  get id() {
    return this.data.id;
  }

  /**
   * @return the VeloViewer objective difficulty rating (0 means no rating)
   */
  get difficulty() {
    return this.data.difficulty;
  }

  /**
   * @return true if the current user has completed the route.
   */
  get isCompleted() {
    return this.hasCompletedRoute;
  }

  /**
   * @return true if this route is an "Event Only" route.
   */
  get isEventOnly() {
    return this.data.eventonly;
  }

  /**
   * @return true if this route is for cycling.
   */
  get isForCycling() {
    return ['all', 'cycling'].indexOf(this.data.sports) !== -1;
  }

  /**
   * @return true if this route is for running.
   */
  get isForRunning() {
    return ['all', 'running'].indexOf(this.data.sports) !== -1;
  }

  /**
   * @return the distance from the drop-point to the start of the route, in km.
   */
  get leadinDistance() {
    return this.data.leadin_distance;
  }

  /**
   * @return the elevation gain from the drop-point to the start of the route, in m.
   */
  get leadinElevationGain() {
    return this.data.leadin_elevation;
  }

  /**
   * @return the minimum Zwift level needed to use the route.
   */
  get minimumZwiftLevel() {
    return this.data.level || 0;
  }

  /**
   * @return the name of the route
   */
  get routeName() {
    return this.data.name;
  }

  /**
   * @return the official distance of the route, in km.
   */
  get routeDistance() {
    return this.data.distance;
  }

  /**
   * @return the official elevation gain of the route, in m.
   */
  get routeElevationGain() {
    return this.data.elevation;
  }

  /**
   * @return the total distance (official distance + lead-in), in km.
   */
  get totalDistance() {
    return this.data.distance + this.data.leadin_distance;
  }

  /**
   * @return the total elevation gain (official elevation gain + lead-in), in m.
   */
  get totalElevationGain() {
    return this.data.elevation + this.data.leadin_elevation;
  }

  /**
   * Link to the Zwift Insider route page, or an empty string if no page.
   */
  get zwiftInsiderLink() {
    return this.data.link || '';
  }

  /**
   * @return the Zwift world where this route is located.
   */
  get zwiftWorld() {
    return this.data.world;
  }

  /**
   * Updates the route settings that are not read-only.  Currently, you can only set
   * the completed flag.
   *
   * @param {RouteUpdate} routeUpdate the update instructions
   * @param {boolean} routeUpdate.isCompleted sets the route to completed by this user
   */
  updateRoute(routeUpdate) {
    if ('isCompleted' in routeUpdate) {
      this.hasCompletedRoute = routeUpdate.isCompleted;
    }
    return this;
  }
}
