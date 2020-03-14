export default interface ZwiftRoute {
  readonly id: string;
  readonly difficulty: number;
  readonly isCompleted: boolean;
  readonly isEventOnly: boolean;
  readonly isForRunning: boolean;
  readonly isForCycling: boolean;
  readonly leadinDistance: number;
  readonly leadinElevationGain: number;
  readonly minimumZwiftLevel: number;
  readonly routeDistance: number;
  readonly routeElevationGain: number;
  readonly routeName: string;
  readonly totalDistance: number;
  readonly totalElevationGain: number;
  readonly zwiftInsiderLink: URL | undefined;
  readonly zwiftWorld: string;

  updateCompleted(value: boolean): Promise<void>;
}
