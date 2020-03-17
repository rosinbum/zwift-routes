/* eslint-env jest */
import ZwiftRouteService from '../ZwiftRouteService';
import ZwiftRoute from 'models/ZwiftRoute';
import { getUserService } from './utils';

const dbRoot = 'routeservice-db-';

// Three routes
// 1: The Pretzel
// 2: Classique
// 3: Classique Reverse
const route1 = { routeId: 'd6bad120-7602-4beb-94df-fb3b71d5b8c8', isCompleted: true };
const route2 = { routeId: '70e64f35-d533-432f-9686-9eeff22fcc52', isCompleted: true };
const route3 = { routeId: '9fe7cb2d-7476-49bf-9ee3-175a2189bf49', isCompleted: false };

test('can construct a ZwiftRouteService', () => {
  const userService = getUserService(dbRoot);
  const routeService = new ZwiftRouteService(userService);
  expect(routeService).toBeInstanceOf(ZwiftRouteService);
});

test('a single route can be returned', async () => {
  const userService = getUserService(dbRoot);
  const routeService = new ZwiftRouteService(userService);
  
  const result = await routeService.getZwiftRoute(route1.routeId);
  expect(result).toBeDefined();
  expect(result).toBeInstanceOf(ZwiftRoute);
  expect(result?.routeName).toBe('The Pretzel');
});

test('invalid route ID returns undefined', async () => {
  const userService = getUserService(dbRoot);
  const routeService = new ZwiftRouteService(userService);
  
  const result = await routeService.getZwiftRoute('invalid');
  expect(result).not.toBeDefined();
});

test('user data is returned when retrieving a route', async () => {
  const userService = getUserService(dbRoot);
  await userService.setUserData(route1);
  const routeService = new ZwiftRouteService(userService);
  
  const result = await routeService.getZwiftRoute(route1.routeId);
  expect(result).toBeDefined();
  expect(result?.isCompleted).toBe(true);
});

test('can store new completion data', async () => {
  const userService = getUserService(dbRoot);
  await userService.setUserData(route2);
  const routeService = new ZwiftRouteService(userService);

  const result = await routeService.getZwiftRoute(route2.routeId);
  expect(result).toBeDefined();
  if (result) {
    result.isCompleted = false;
    await routeService.storeZwiftRoute(result);
  }

  const userData = await userService.getUserData(route2.routeId);
  expect(userData).toBeDefined();
  expect(userData?.isCompleted).toBe(false);
});

test('can retrieve all routes', async () => {
  const userService = getUserService(dbRoot);
  const routeService = new ZwiftRouteService(userService);

  const result = await routeService.getAllZwiftRoutes();
  expect(result).toBeDefined();
  expect(result).toBeInstanceOf(Array);
  expect(result.length).toBeGreaterThan(100);
});

test('retrieved routes have user data', async () => {
  const userService = getUserService(dbRoot);
  await userService.setUserData(route1);
  await userService.setUserData(route2);
  await userService.setUserData(route3);
  const routeService = new ZwiftRouteService(userService);

  const result = await routeService.getAllZwiftRoutes();
  expect(result).toBeDefined();
  expect(result).toBeInstanceOf(Array);
  if (result) {
    const r1 = result.find((r) => r.id === route1.routeId);
    const r2 = result.find((r) => r.id === route2.routeId);
    const r3 = result.find((r) => r.id === route3.routeId);

    expect(r1).toBeInstanceOf(ZwiftRoute);
    expect(r1?.isCompleted).toBe(true);

    expect(r2).toBeInstanceOf(ZwiftRoute);
    expect(r2?.isCompleted).toBe(true);

    expect(r3).toBeInstanceOf(ZwiftRoute);
    expect(r3?.isCompleted).toBe(false);
  }
});
