import { ZwiftRoute } from 'models';
import UserDatabase, { ZwiftUserData } from './impl/UserDatabase';
import ZwiftDataInput from './impl/ZwiftDataInput';
import ZwiftRouteImpl from './impl/ZwiftRouteImpl';
import routeData from './data/routes.json';

export class ZwiftRouteService {
  private db: UserDatabase;

  constructor() {
    this.db = new UserDatabase();
  }

  /**
   * Load the Zwift Routes from backing store.
   * 
   * @returns (async) array of Zwift routes.
   */
  async loadZwiftRoutes(): Promise<ZwiftRoute[]> {
    const storedUserData: ZwiftUserData[] = await this.db.userData.toArray();
    const results: ZwiftRoute[] = routeData.map((route: ZwiftDataInput) => {
      const userData = storedUserData.find((u) => u.id === route.id);
      return new ZwiftRouteImpl(route, userData, this);
    });
    return results;
  }

  /**
   * Store the Zwift Route (particularly the user portion of the data)
   */
  async saveZwiftRoute(zwiftRoute: ZwiftRoute): Promise<void> {
    const userData: ZwiftUserData = {
      id: zwiftRoute.id, 
      isCompleted: zwiftRoute.isCompleted
    };
    await this.db.userData.put(userData, userData.id);
  }
}

const service = new ZwiftRouteService();

export default service;
