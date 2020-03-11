import { ZwiftSport } from './ZwiftSport';

/**
 * Definition of the record in the routes.json file.
 */
export default interface ZwiftRouteInput {
  readonly id: string,
  readonly difficulty: number,
  readonly distance: number,
  readonly elevation: number,
  readonly eventonly: boolean,
  readonly leadin_distance: number,
  readonly leadin_elevation: number,
  readonly level: number,
  readonly link?: string,
  readonly sports: ZwiftSport,
  readonly name: string,
  readonly world: string
}
