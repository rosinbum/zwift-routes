/**
 * Definition for the dynamic user data that is stored in the database.
 */
export default interface ZwiftUserData {
  /**
   * ID of the Zwift Route this pertains to.
   */
  routeId: string;

  /**
   * Has the user completed the route?
   */
  isCompleted: boolean;
}
