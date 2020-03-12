/**
 * Conversion utility - converts kilometers to miles.
 */
export const toMiles = (km) => km * 0.6214;

/**
 * Conversion utility - converts meters to feet.
 */
export const toFeet = (m) => m * 3.2808;

/**
 * Display formatter for distance
 */
export const formatDistance = (distance, displayUnits) => {
  if (displayUnits === 'imperial') {
    return `${toMiles(distance).toFixed(1)}mi`;
  }
  return `${distance.toFixed(1)}km`;
};

/**
 * Display formatter for elevation gain
 */
export const formatElevationGain = (elevationGain, displayUnits) => {
  if (displayUnits === 'imperial') {
    return `${toFeet(elevationGain).toFixed(0)}ft`;
  }
  return `${elevationGain.toFixed(0)}m`;
};
