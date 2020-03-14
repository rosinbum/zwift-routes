import UserSettings from './UserSettings';
import ZwiftRoute from './ZwiftRoute';

export default interface AppState {
  userSettings: UserSettings;
  zwiftRoutes: ZwiftRoute[];
}
