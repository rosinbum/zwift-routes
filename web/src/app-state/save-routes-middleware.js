import { UPDATE_ROUTE_ACTION } from './reducers/routes';
import routeServiceClient from '../services/route-service';

/**
 * Redux middleware that saves the state of the routes to
 * the route state service when it changes.
 */
const saveRoutesMiddleware = () => (next) => async (action) => {
  const result = next(action);

  if (action.type === UPDATE_ROUTE_ACTION && action.isLoading !== true) {
    await routeServiceClient.saveRouteState(action);
  }

  return result;
};

export default saveRoutesMiddleware;
