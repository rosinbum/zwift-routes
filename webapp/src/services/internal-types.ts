import { ZwiftUserData } from 'models/internal-types';

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
   * Async method to update the data for a specific route.
   */
  setUserData(userData: ZwiftUserData): Promise<void>;
}
