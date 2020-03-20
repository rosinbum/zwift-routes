import { ZwiftUserData } from '../models';

/**
 * The ZwiftUserService stores dynamic data about the routes that the user
 * has completed.
 */
export interface ZwiftUserService {
  /**
   * Async method to retrieve all the data from the user service.
   * 
   * @returns List of the routes with user data (async).
   */
  getAllUserData(): Promise<ZwiftUserData[]>;

  /**
   * Async method to retrieve the data from the store for a single route.
   * 
   * @param id the route ID for the ZwiftRoute
   * @returns the route with user data, or undefined if no data is available (async)
   */
  getUserData(id: string): Promise<ZwiftUserData | undefined>;

  /**
   * Async method to update the data for a specific route.
   * 
   * @param userData the user data to store
   */
  setUserData(userData: ZwiftUserData): Promise<void>;
}
