import { SortField, SortOrder, SortDirection, ZwiftRoute } from 'src/models';

type ZwiftSortFn = (a: ZwiftRoute, b: ZwiftRoute) => number

/**
 * Provides a comparator for sorting alphabetically, ignoring case.
 * 
 * @param a the first string
 * @param b the second string
 * @returns -1, 0, or 1 depending on sort order
 */
const alphabetically = (a: string, b: string): number =>
  a.toLowerCase().localeCompare(b.toLowerCase());

/**
 * Returns the sort comparator to use when sorting the Zwift Routes.
 * 
 * @param sortField the field to sort by.
 * @param ascending sort ascending is true, descending if false
 */
function getComparator(sortOrder: SortOrder): ZwiftSortFn {
  switch (sortOrder.sortField) {
    case SortField.Difficulty:
      return sortOrder.sortDirection === SortDirection.Ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.difficulty - b.difficulty
        : (a: ZwiftRoute, b: ZwiftRoute) => b.difficulty - a.difficulty;
    case SortField.RouteDistance:
      return sortOrder.sortDirection === SortDirection.Ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.routeDistance - b.routeDistance
        : (a: ZwiftRoute, b: ZwiftRoute) => b.routeDistance - a.routeDistance;
    case SortField.RouteElevationGain:
      return sortOrder.sortDirection === SortDirection.Ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.routeElevationGain - b.routeElevationGain
        : (a: ZwiftRoute, b: ZwiftRoute) => b.routeElevationGain - a.routeElevationGain;
    case SortField.TotalDistance:
      return sortOrder.sortDirection === SortDirection.Ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.totalDistance - b.totalDistance
        : (a: ZwiftRoute, b: ZwiftRoute) => b.totalDistance - a.totalDistance;
    case SortField.TotalElevationGain:
      return sortOrder.sortDirection === SortDirection.Ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.totalElevationGain - b.totalElevationGain
        : (a: ZwiftRoute, b: ZwiftRoute) => b.totalElevationGain - a.totalElevationGain;
    case SortField.Name:
    default:
      return sortOrder.sortDirection === SortDirection.Ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => alphabetically(a.routeName, b.routeName)
        : (a: ZwiftRoute, b: ZwiftRoute) => alphabetically(b.routeName, a.routeName);
  }
}

export default getComparator;
