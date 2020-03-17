/* eslint-env jest */
import DexieUserService from '../DexieUserService';
import { getUserService } from './utils';

const dbRoot = 'dexie-userdb-';

test('can construct a ZwiftUserService', () => {
  const userService = getUserService(dbRoot);
  expect(userService).toBeInstanceOf(DexieUserService);
});

test('Default ZwiftUserService can be created', () => {
  const userService = new DexieUserService();
  expect(userService).toBeInstanceOf(DexieUserService);
});

test('can store user data in the ZwiftUserService', async () => {
  const userService = getUserService(dbRoot);

  const ud1 = await userService.getUserData('id1');
  expect(ud1).not.toBeDefined();

  const userData = { routeId: 'id1', isCompleted: true };
  await userService.setUserData(userData);

  const ud2 = await userService.getUserData('id1');
  expect(ud2).toStrictEqual(userData);

  const ud3 = await userService.getUserData('id2');
  expect(ud3).not.toBeDefined();
});

test('getAllUserData returns an empty array', async () => {
  const userService = getUserService(dbRoot);

  const result = await userService.getAllUserData();
  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(0);
});

test('getAllUserData returns data', async () => {
  const userService = getUserService(dbRoot);

  await userService.setUserData({ routeId: 'id1', isCompleted: true });
  await userService.setUserData({ routeId: 'id2', isCompleted: false });
  await userService.setUserData({ routeId: 'id3', isCompleted: true });

  const result = await userService.getAllUserData();
  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(3);

  const ud1 = result.find((r) => r.routeId === 'id1');
  expect(ud1).toBeDefined();
  expect(ud1?.isCompleted).toBe(true);
  
  const ud2 = result.find((r) => r.routeId === 'id2');
  expect(ud2).toBeDefined();
  expect(ud2?.isCompleted).toBe(false);
});



