import DexieUserService from './DexieUserService';
import ZwiftRouteService from './ZwiftRouteService';

/*
 * Creates a new user data service singleton
 */
export const userService = new DexieUserService();

/*
 * Creates a new route service singleton
 */
export const routeService = new ZwiftRouteService(userService);
