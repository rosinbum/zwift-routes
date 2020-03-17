import { userService, routeService } from '../index';
import DexieUserService from 'services/DexieUserService';
import ZwiftRouteService from 'services/ZwiftRouteService';

test('userService is a user service', () => {
  expect(userService).toBeInstanceOf(DexieUserService);
});

test('routeService is a route service', () => {
  expect(routeService).toBeInstanceOf(ZwiftRouteService);
});
