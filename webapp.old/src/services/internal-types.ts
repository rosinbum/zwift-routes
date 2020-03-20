import ZwiftUserData from 'models/ZwiftUserData';

/**
 * The ZwiftUserService stores dynamic data about the routes that
 * the user has set.
 */
export interface ZwiftUserService {
  /**
   * Async method to retrieve all the data from the store.
   */
  getAllUserData(): Promise<ZwiftUserData[]>;

  /**
   * Async method to retrieve the data from the store. 
   * 
   * @param id the route ID for the ZwiftRoute
   * @returns the ZwiftUserData, or undefined if none available (async).
   */
  getUserData(id: string): Promise<ZwiftUserData | undefined>;

  /**
   * Async method to update the data for a specific route.
   */
  setUserData(userData: ZwiftUserData): Promise<void>;
}
