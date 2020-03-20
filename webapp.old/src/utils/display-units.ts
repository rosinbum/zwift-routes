import DisplayUnits from 'models/DisplayUnits';

/**
 * Converts kilometers to miles.
 * 
 * @param distance distance to convert, in km
 * @returns the same distance in miles
 */
export const toMiles = (distance: number): number => distance * 0.6213712;

/**
 * Converts meters to feet.
 * 
 * @param elevationGain the elevation gain to convert, in m
 * @returns the same elevation gain in feet
 */
export const toFeet = (elevationGain: number): number => elevationGain * 3.28084;

/**
 * Converts a distance to a printable string
 *
 * @param {number} distance the distance to display
 * @param {DisplayUnits} displayUnits the display units (imperial or metric)
 * 
 * @returns {string}
 */
export function formatDistance(distance: number, displayUnits: DisplayUnits): string {
  switch (displayUnits) {
    case DisplayUnits.Imperial:
      return `${toMiles(distance).toFixed(1)}mi`;
    case DisplayUnits.Metric:
      return `${distance.toFixed(1)}km`;
  }
}

/**
 * Converts an elevation gain to a printable string
 *
 * @param {number} elevationGain the elevation gain to display
 * @param {DisplayUnits} displayUnits the display units (imperial or metric)
 * 
 * 
 * @returns {string}
 */
export function formatElevationGain(elevationGain: number, displayUnits: DisplayUnits): string {
  switch (displayUnits) {
    case DisplayUnits.Imperial:
      return `${toFeet(elevationGain).toFixed(0)}ft`;
    case DisplayUnits.Metric:
      return `${elevationGain.toFixed(0)}m`;
  }
}
