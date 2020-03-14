import DisplayUnits from './DisplayUnits';

export default interface UserSettings {
  selectedWorld: string;
  selectedSport: string;
  includeWatopia: boolean;
  includeEventRoutes: boolean;
  includeCompletedRoutes: boolean;
  sortField: string;
  displayUnits: DisplayUnits;
}