import Dexie from 'dexie';

/**
 * Data definition for the stored data.
 */
export interface ZwiftUserData {
  id: string,
  isCompleted: boolean
}

/**
 * Dexie database definition for use in the ZwiftRouteService
 */
export default class UserDatabase extends Dexie {
  userData: Dexie.Table<ZwiftUserData, string>;

  constructor() {
    super('zwiftroutes');
    this.version(1).stores({
      userData: '&id,isCompleted'
    });
    this.userData = this.table('userData');
  }

}