import SortField from 'models/SortField';
import ZwiftRoute from 'models/ZwiftRoute';

type ZwiftSortFn = (a: ZwiftRoute, b: ZwiftRoute) => number

/**
 * Provides a comparator for sorting alphabetically, ignoring case.
 * 
 * @param a the first string
 * @param b the second string
 * @returns -1, 0, or 1 depending on sort order
 */
function sortAlphabetically(a: string, b: string): number {
  const la = a.toLowerCase();
  const lb = b.toLowerCase();
  return la.localeCompare(lb);
}

/**
 * Returns the sort comparator to use when sorting the Zwift Routes.
 * 
 * @param sortField the field to sort by.
 * @param ascending sort ascending is true, descending if false
 */
function getComparator(sortField: SortField, ascending: boolean): ZwiftSortFn {
  switch (sortField) {
    case SortField.Difficulty:
      return ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.difficulty - b.difficulty
        : (a: ZwiftRoute, b: ZwiftRoute) => b.difficulty - a.difficulty;
    case SortField.RouteDistance:
      return ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.routeDistance - b.routeDistance
        : (a: ZwiftRoute, b: ZwiftRoute) => b.routeDistance - a.routeDistance;
    case SortField.RouteElevationGain:
      return ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.routeElevationGain - b.routeElevationGain
        : (a: ZwiftRoute, b: ZwiftRoute) => b.routeElevationGain - a.routeElevationGain;
    case SortField.TotalDistance:
      return ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.totalDistance - b.totalDistance
        : (a: ZwiftRoute, b: ZwiftRoute) => b.totalDistance - a.totalDistance;
    case SortField.TotalElevationGain:
      return ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => a.totalElevationGain - b.totalElevationGain
        : (a: ZwiftRoute, b: ZwiftRoute) => b.totalElevationGain - a.totalElevationGain;
    case SortField.Name:
    default:
      return ascending
        ? (a: ZwiftRoute, b: ZwiftRoute) => sortAlphabetically(a.routeName, b.routeName)
        : (a: ZwiftRoute, b: ZwiftRoute) => sortAlphabetically(b.routeName, a.routeName);
  }
}

export default getComparator;
