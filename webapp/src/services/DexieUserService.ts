import Dexie from 'dexie';
import { ZwiftUserService } from './internal-types';
import { ZwiftUserData } from 'src/models';

/**
 * Definition of dexie options
 * @see https://dexie.org/docs/Dexie/Dexie
 */
interface DexieOptions {
  autoOpen?: boolean;
  indexedDB?: IDBFactory;
}

/**
 * The Dexie user database.  Default values are valid for production
 * use and match the existing web app.
 */
class ZwiftUserDatabase extends Dexie {
  routeState: Dexie.Table<ZwiftUserData, string>;

  constructor(databaseName: string, options: DexieOptions) {
    // If options.indexedDB isn't given, then make sure it is gone!
    if (!options.indexedDB) delete options.indexedDB;
    super(databaseName, options);
    this.version(1).stores({
      routeState: '&routeId,isCompleted'
    });
    this.routeState = this.table('routeState');
  }
}

/**
 * Implementation of the ZwiftUserService that uses IndexedDB via the
 * Dexie package as the underlying data store.
 */
export default class DexieUserService implements ZwiftUserService {
  private database: ZwiftUserDatabase;

  /**
   * Opens the database for use.  The defaults are meant for handling the
   * production case.  You may, however, set the database name and indexedDB
   * object for mocking purposes.
   * 
   * @param databaseName The name of the database (zwiftroutes by default)
   * @param indexedDB a pointer to the IDBFactory
   */
  constructor(databaseName: string = 'zwiftroutes', indexedDB?: IDBFactory) {
    const options: DexieOptions = {
      autoOpen: true,
      indexedDB
    };
    this.database = new ZwiftUserDatabase(databaseName, options);
  }

  /**
   * Returns all the user data (asynchronously) as an array.
   */
  async getAllUserData(): Promise<ZwiftUserData[]> {
    const result = await this.database.routeState.toArray();
    return result;
  }

  /**
   * Async method to retrieve the data from the store. 
   * 
   * @param id the route ID for the ZwiftRoute
   * @returns the ZwiftUserData, or undefined if none available (async).
   */
  async getUserData(id: string): Promise<ZwiftUserData | undefined> {
    const userData = await this.database.routeState.get(id);
    return userData;
  }

  /**
   * Stores the user data in the backing store (asynchronously)
   * @param userData the user data to store.
   */
  async setUserData(userData: ZwiftUserData): Promise<void> {
    await this.database.routeState.put(userData);
  }
}
