import DexieUserService from './DexieUserService';
import ZwiftRouteService from './ZwiftRouteService';

/* Re-export the types for this module */
export { DexieUserService, ZwiftRouteService };

/* The user data service singleton */
export const userService = new DexieUserService();

/* The route service singleton */
export const routeService = new ZwiftRouteService(userService);
