import DexieUserService from './DexieUserService';
import ZwiftRouteService from './ZwiftRouteService';

/* The user data service singleton */
export const userService = new DexieUserService();

/* The route service singleton */
export const routeService = new ZwiftRouteService(userService);