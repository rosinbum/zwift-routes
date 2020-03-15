import NetworkState from './NetworkState';
import UserSettings from './UserSettings';
import ZwiftRoute from './ZwiftRoute';

export default interface AppState {
  network: NetworkState;
  userSettings: UserSettings;
  zwiftRoutes: ZwiftRoute[];
}
