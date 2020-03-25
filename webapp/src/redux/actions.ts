import { startRequest, stopRequest, setError } from './modules/app/actions';
import { updateRoute as updateRouteInStore } from './modules/route/actions';
import { ZwiftRoute } from 'src/models';
import { routeService } from 'src/services';
import { AnyAction, Dispatch } from 'redux';

export {
  clearError,
  setDisplay,
  setError,
  setFilter,
  setSort,
  startRequest,
  stopRequest
} from './modules/app/actions'

export {
  loadRoutes,
  updateRoute as updateRouteInStore
} from './modules/route/actions'

export function updateRoute(route: ZwiftRoute) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(startRequest());
    routeService.storeZwiftRoute(route)
      .then(() => {
        dispatch(stopRequest());
        dispatch(updateRouteInStore(route));
        return;
      })
      .catch((error: Error) => {
        dispatch(setError(error));
      });
  };
}
