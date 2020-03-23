import React from 'react';
import RouteDetails from 'src/ui/containers/desktop/RouteDetails';
import data from 'src/data/routes.json';
import { ZwiftRoute } from 'src/models';

export default {
  title: 'Desktop/RouteDetails'
};

const routeData = [
  new ZwiftRoute({ ...data[0], sports: 'cycling', eventonly: false }),
  new ZwiftRoute({ ...data[0], sports: 'running', eventonly: false }),
  new ZwiftRoute({ ...data[0], sports: 'all', eventonly: false }),
  new ZwiftRoute({ ...data[0], sports: 'cycling', eventonly: true }),
  new ZwiftRoute({ ...data[0], sports: 'running', eventonly: true }),
  new ZwiftRoute({ ...data[0], sports: 'all', eventonly: true }),
  new ZwiftRoute({ ...data[0], sports: 'cycling', eventonly: false }, { routeId: data[0].id, isCompleted: true}),
  new ZwiftRoute({ ...data[0], sports: 'running', eventonly: false }, { routeId: data[0].id, isCompleted: true}),
  new ZwiftRoute({ ...data[0], sports: 'all', eventonly: false }, { routeId: data[0].id, isCompleted: true}),
  new ZwiftRoute({ ...data[0], sports: 'cycling', eventonly: true }, { routeId: data[0].id, isCompleted: true}),
  new ZwiftRoute({ ...data[0], sports: 'running', eventonly: true }, { routeId: data[0].id, isCompleted: true}),
  new ZwiftRoute({ ...data[0], sports: 'all', eventonly: true }, { routeId: data[0].id, isCompleted: true}),
  new ZwiftRoute({ ...data[0], sports: 'cycling', level: 10 }),
  new ZwiftRoute({ ...data[0], sports: 'running', level: 12 }),
  new ZwiftRoute({ ...data[0], sports: 'all', level: 14 }),
];



export const bike: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[0]} />
  </div>
);

export const run: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[1]} />
  </div>
);

export const all: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[2]} />
  </div>
);

export const bikeEvent: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[3]} />
  </div>
);

export const runEvent: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[4]} />
  </div>
);

export const allEvent: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[5]} />
  </div>
);

export const bikeCompleted: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[6]} />
  </div>
);

export const runCompleted: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[7]} />
  </div>
);

export const allCompleted: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[8]} />
  </div>
);

export const bikeLevel: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[12]} />
  </div>
);

export const runLevel: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[13]} />
  </div>
);

export const allLevel: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteDetails route={routeData[14]} />
  </div>
);
