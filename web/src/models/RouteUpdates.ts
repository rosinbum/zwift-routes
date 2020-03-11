/**
 * When a user determines that they want to update a route, this interface
 * describes what the user can change.
 */
interface RouteUpdates {
  /**
   * Has the user completed the route.
   */
  isCompleted?: boolean
}

export default RouteUpdates;
