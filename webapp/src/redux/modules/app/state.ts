import { DisplaySettings, RouteFilter, SortOrder } from "../../../models";

/**
 * Definition of the state for this module
 */
type AppState = Readonly<{
  /** Number of current network requests */
  requests: number;

  /** Last unacknowledged error */
  error?: Error;

  /** Current display settings */
  display: DisplaySettings;

  /** Current route list filter */
  filter: RouteFilter;

  /** Current route list sort order */
  sortOrder: SortOrder;
}>;

export default AppState;
