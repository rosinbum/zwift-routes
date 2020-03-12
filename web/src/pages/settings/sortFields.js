const routeNameSortComparator = (a, b) => {
  const aa = a.routeName.toLowerCase();
  const bb = b.routeName.toLowerCase();
  if (aa === bb) return 0;
  return (aa < bb) ? -1 : 1;
};

/**
 * List of supported sort fields by the route list.
 * This is used in settings to provide a drop-down selector.
 */
export const supportedSortFields = {
  difficulty: {
    title: 'Difficulty',
    comparator: (a, b) => a.difficulty - b.difficulty
  },
  routeDistance: {
    title: 'Route Distance',
    comparator: (a, b) => a.routeDistance - b.routeDistance
  },
  routeElevationGain: {
    title: 'Route Elevation Gain',
    comparator: (a, b) => a.routeElevationGain - b.routeElevationGain
  },
  totalDistance: {
    title: 'Total Distance',
    comparator: (a, b) => a.totalDistance - b.totalDistance
  },
  totalElevationGain: {
    title: 'Total Elevation Gain',
    comparator: (a, b) => a.totalElevationGain - b.totalElevationGain
  },
  routeName: {
    title: 'Route Name',
    comparator: routeNameSortComparator
  }
};

/**
 * Returns the sort comparator for a specific sort field.
 *
 * @param {string} sortField
 */
export const sortComparator = (sortField) => {
  if (sortField in supportedSortFields) {
    return supportedSortFields[sortField].comparator;
  }
  return routeNameSortComparator;
};
