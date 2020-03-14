import { ZwiftRoute } from 'models';
import startCase from 'lodash/startCase';
import ZwiftDataInput from './ZwiftDataInput';
import { ZwiftUserData } from './UserDatabase';
import { ZwiftRouteService } from '../ZwiftRouteService';

type OptUserData = ZwiftUserData | undefined;

export default class ZwiftRouteImpl implements ZwiftRoute {
  private routeData: ZwiftDataInput;
  private userData: ZwiftUserData;
  private service: ZwiftRouteService;

  constructor(routeData: ZwiftDataInput, userData: OptUserData, service: ZwiftRouteService) {
    this.routeData = routeData;
    this.userData = userData || { id: routeData.id, isCompleted: false };
    this.service = service;
  }

  get id(): string {
    return this.routeData.id;
  }

  get difficulty(): number {
    return this.routeData.difficulty;
  }
  
  get isCompleted(): boolean {
    return this.userData.isCompleted;
  }
  
  get isEventOnly(): boolean {
    return this.routeData.eventonly;
  }
  
  get isForCycling(): boolean {
    return this.routeData.sports === 'all' || this.routeData.sports === 'cycling';
  }

  get isForRunning(): boolean {
    return this.routeData.sports === 'all' || this.routeData.sports === 'running';
  }

  get leadinDistance(): number {
    return this.routeData.leadin_distance;
  }
  
  get leadinElevationGain(): number {
    return this.routeData.leadin_elevation;
  }
  
  get minimumZwiftLevel(): number {
    return this.routeData.level || 0;
  }
  
  get routeDistance(): number {
    return this.routeData.distance;
  }
  
  get routeElevationGain(): number {
    return this.routeData.elevation;
  }
  
  get routeName(): string {
    return this.routeData.name;
  }
  
  get totalDistance(): number {
    return this.routeData.leadin_distance + this.routeData.distance;
  }
  
  get totalElevationGain(): number {
    return this.routeData.leadin_elevation + this.routeData.elevation;
  }
  
  get zwiftInsiderLink(): URL | undefined {
    if (this.routeData.link) {
      return new URL(this.routeData.link);
    }
    return undefined;
  }
  
  get zwiftWorld(): string {
    return startCase(this.routeData.world);
  }

  async updateCompleted(value: boolean): Promise<void> {
    if (this.userData.isCompleted !== value) {
      this.userData.isCompleted = value;
      return this.service.saveZwiftRoute(this);
    }
    return new Promise((resolve) => resolve());
  }
}
