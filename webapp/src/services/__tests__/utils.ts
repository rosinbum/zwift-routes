import DexieUserService from '../DexieUserService';
import { ZwiftUserService } from 'services/internal-types';
const indexedDB = require('fake-indexeddb');

let testDbId = 0;

/**
 * Returns a new user service for each test.
 * 
 * @param dbRoot the root database name
 * @returns the user service
 */
export const getUserService = (dbRoot: string): ZwiftUserService => {
  const dbName = `${dbRoot}${testDbId}`;
  const userService = new DexieUserService(dbName, indexedDB);
  testDbId++;
  return userService;
};
