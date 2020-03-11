/**
 * The details of a route in the Zwift World
 */
interface ZwiftRoute {
  /**
   * A unique ID for this route.
   */
  readonly id: string,

  /**
   * Determines if the route is completed or not.
   */
  readonly isCompleted: boolean,

  /**
   * The name that Zwift uses to identify this route
   */
  readonly name: string
}

export default ZwiftRoute;
