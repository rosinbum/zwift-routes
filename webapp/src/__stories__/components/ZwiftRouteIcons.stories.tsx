import React from 'react';
import ZwiftRouteIcons from 'src/ui/components/ZwiftRouteIcons';
import { ZwiftRouteData, ZwiftRoute } from 'src/models';

export default {
  title: 'Components/ZwiftRouteIcons'
};

const routeInfo: ZwiftRouteData = {
  id: 'test',
  name: 'test',
  eventonly: false,
  sports: 'all',
  difficulty: 0,
  distance: 0,
  elevation: 0,
  leadin_distance: 0,
  leadin_elevation: 0,
  world: 'Watopia'
};

const style = { backgroundColor: 'blue', width: '150px' };

export const cycling: React.SFC<{}> = () => {
  const route = new ZwiftRoute({ ...routeInfo, sports: 'cycling' });
  return (
    <div style={style}>
      <ZwiftRouteIcons route={route} />
    </div>
  );
};

export const running: React.SFC<{}> = () => {
  const route = new ZwiftRoute({ ...routeInfo, sports: 'running' });
  return (
    <div style={style}>
      <ZwiftRouteIcons route={route} />
    </div>
  );
};

export const allSports: React.SFC<{}> = () => {
  const route = new ZwiftRoute(routeInfo);
  return (
    <div style={style}>
      <ZwiftRouteIcons route={route} />
    </div>
  );
};

export const cyclingEvent: React.SFC<{}> = () => {
  const route = new ZwiftRoute({ ...routeInfo, sports: 'cycling', eventonly: true });
  return (
    <div style={style}>
      <ZwiftRouteIcons route={route} />
    </div>
  );
};

export const runningEvent: React.SFC<{}> = () => {
  const route = new ZwiftRoute({ ...routeInfo, sports: 'running', eventonly: true });
  return (
    <div style={style}>
      <ZwiftRouteIcons route={route} />
    </div>
  );
};

export const everything: React.SFC<{}> = () => {
  const route = new ZwiftRoute({ ...routeInfo, eventonly: true });
  return (
    <div style={style}>
      <ZwiftRouteIcons route={route} />
    </div>
  );
};
