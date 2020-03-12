import { Dispatch } from 'redux';
import { LOAD_ROUTES, RouteAction } from '../reducers/routes';

/**
 * Asynchronously load the route information from the service.
 */
export const loadRoutes = () => {
  return async (dispatch: Dispatch<RouteAction>) => {
    try {
      const response = await fetch(process.env.PUBLIC_URL + '/routes.json');
      console.log(response);
      const json = await response.json();
      console.log(json);
      const routes = JSON.parse(json);
      console.log(routes);
      const action: RouteAction = { type: LOAD_ROUTES, routes };
      dispatch(action);
    } catch (responseError) {
      console.error(responseError);
    }
  };
};
