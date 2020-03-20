/**
 * Potential values for the sorting of the list
 */
enum SortField {
  /**
   * Sort by the name of the route
   */
  Name = 'name',

  /**
   * Sort by the VeloViewer difficulty rating
   */
  Difficulty = 'difficulty',

  /**
   * Sort by the official distance
   */
  RouteDistance = 'routeDistance',

  /**
   * Sort by the official elevation gain
   */
  RouteElevationGain = 'routeElevationGain',

  /**
   * Sort by the total distance
   */
  TotalDistance = 'totalDistance',

  /**
   * Sort by the total elevation gain
   */
  TotalElevationGain = 'totalElevationGain'
}

export default SortField;
