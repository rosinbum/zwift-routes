import DexieUserService from '../services/DexieUserService';
import ZwiftRouteService from '../services/ZwiftRouteService';
import { ZwiftUserService } from '../services/internal-types';
import { routeService, userService } from '../services';
import { ZwiftRoute } from '../models';
const indexedDB = require('fake-indexeddb');

let dbID = 0;
const dbRoot = 'test-db-';

// Test Data
// 1: The Pretzel
const route1 = { routeId: 'd6bad120-7602-4beb-94df-fb3b71d5b8c8', isCompleted: true };
// 2: Classique
const route2 = { routeId: '70e64f35-d533-432f-9686-9eeff22fcc52', isCompleted: true };
// 3: Classique Reverse
const route3 = { routeId: '9fe7cb2d-7476-49bf-9ee3-175a2189bf49', isCompleted: false };

/** Helper method to create a new user service with a mock indexedDB */
const getUserService = (): ZwiftUserService => {
  const dbName = `${dbRoot}${dbID}`;
  dbID += 1;
  return new DexieUserService(dbName, indexedDB);
};

describe('services', () => {
  describe('DexieUserService', () => {
    it('can create a default user service', () => {
      const actual = new DexieUserService();
      expect(actual).toBeInstanceOf(DexieUserService);
    });

    it('can store user data into indexedDB', async () => {
      const service = getUserService();
      await service.setUserData(route1);
      const actual = await service.getUserData(route1.routeId);
      expect(actual).toStrictEqual(route1);
    });

    it('can retrieve all user data when empty', async () => {
      const service = getUserService();

      const actual = await service.getAllUserData();
      expect(actual).toBeInstanceOf(Array);
      expect(actual).toHaveLength(0);
    });

    it('can retrieve stored user data', async () => {
      const service = getUserService();
      await service.setUserData(route1);
      await service.setUserData(route2);
      await service.setUserData(route3);

      const actual = await service.getAllUserData();
      expect(actual).toBeInstanceOf(Array);
      expect(actual).toHaveLength(3);
      expect(actual.find((r) => r.routeId === route1.routeId)?.isCompleted).toStrictEqual(true);
      expect(actual.find((r) => r.routeId === route2.routeId)?.isCompleted).toStrictEqual(false);
      expect(actual.find((r) => r.routeId === route2.routeId)?.isCompleted).toStrictEqual(true);
    });
  });

  describe('ZwiftRouteService', () => {
    it('can be constructed', () => {
      const users = getUserService();
      const service = new ZwiftRouteService(users);
      expect(service).toBeInstanceOf(ZwiftRouteService);
    });

    it('can return a route by ID', async () => {
      const users = getUserService();
      const service = new ZwiftRouteService(users);
      const actual = await service.getZwiftRoute(route1.routeId);
      expect(actual).toBeInstanceOf(ZwiftRoute);
      expect(actual?.routeName).toBe('The Pretzel');
    });

    it('returns undefined on an invalid route ID', async () => {
      const users = getUserService();
      const service = new ZwiftRouteService(users);
      const actual = await service.getZwiftRoute('invalid');
      expect(actual).not.toBeDefined();
    });

    it('accesses user data when retrieving a route', async () => {
      const users = getUserService();
      await users.setUserData(route1);
      const service = new ZwiftRouteService(users);
      const actual = await service.getZwiftRoute(route1.routeId);
      expect(actual).toBeInstanceOf(ZwiftRoute);
      expect(actual?.isCompleted).toStrictEqual(true);
    });

    it('can store new user data', async () => {
      const users = getUserService();
      await users.setUserData(route2);
      const service = new ZwiftRouteService(users);
      const route = await service.getZwiftRoute(route2.routeId);
      expect(route).toBeDefined();
      if(route) {
        route.isCompleted = false;
        await service.storeZwiftRoute(route);
      }

      const actual = await users.getUserData(route2.routeId);
      expect(actual).toBeDefined();
      expect(actual?.isCompleted).toStrictEqual(false);
    });

    it('can retrieve all routes', async () => {
      const users = getUserService();
      const service = new ZwiftRouteService(users);
      const actual = await service.getAllZwiftRoutes();
      expect(actual).toBeInstanceOf(Array);
      expect(actual.length).toBeGreaterThan(100);
    });

    it('combines user data when retrieving all routes', async () => {
      const users = getUserService();
      users.setUserData(route1);
      users.setUserData(route2);
      users.setUserData(route3);
      const service = new ZwiftRouteService(users);
      const actual = await service.getAllZwiftRoutes();
      expect(actual).toBeInstanceOf(Array);

      const r1 = actual.find((r) => r.id === route1.routeId);
      expect(r1).toBeInstanceOf(ZwiftRoute);
      expect(r1?.isCompleted).toBe(true);
  
      const r2 = actual.find((r) => r.id === route2.routeId);
      expect(r2).toBeInstanceOf(ZwiftRoute);
      expect(r2?.isCompleted).toBe(true);
  
      const r3 = actual.find((r) => r.id === route3.routeId);
      expect(r3).toBeInstanceOf(ZwiftRoute);
      expect(r3?.isCompleted).toBe(false);
    });
  });

  describe('singleton services', () => {
    it('defined a user service', () => {
      expect(userService).toBeInstanceOf(DexieUserService);
    });

    it('defined a route service', () => {
      expect(routeService).toBeInstanceOf(ZwiftRouteService);
    });
  });
});