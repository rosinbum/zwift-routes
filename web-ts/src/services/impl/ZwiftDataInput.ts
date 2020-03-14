/**
 * Data definition for the data in routes.json
 */
export default interface ZwiftDataInput {
  id: string;
  difficulty: number;
  distance: number;
  elevation: number;
  eventonly: boolean;
  leadin_distance: number;
  leadin_elevation: number;
  level?: number;
  link?: string;
  name: string;
  sports: string;
  world: string;
}
