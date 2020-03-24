import React from 'react';
import { action } from '@storybook/addon-actions';
import RouteDetails from 'src/ui/containers/desktop/RouteDetails';
import data from 'src/data/routes.json';
import { DisplayUnits, ZwiftRoute } from 'src/models';

export default {
  title: 'Desktop/RouteDetails'
};

const routeData = [
  new ZwiftRoute({ ...data[0], sports: 'cycling', eventonly: false }),
  new ZwiftRoute({ ...data[1], sports: 'running', eventonly: false }),
  new ZwiftRoute({ ...data[2], sports: 'all', eventonly: false }),
  new ZwiftRoute({ ...data[3], sports: 'cycling', eventonly: true }),
  new ZwiftRoute({ ...data[4], sports: 'running', eventonly: true }),
  new ZwiftRoute({ ...data[5], sports: 'all', eventonly: true }),
  new ZwiftRoute({ ...data[6], sports: 'cycling', eventonly: false }, { routeId: data[6].id, isCompleted: true}),
  new ZwiftRoute({ ...data[7], sports: 'running', eventonly: false }, { routeId: data[7].id, isCompleted: true}),
  new ZwiftRoute({ ...data[8], sports: 'all', eventonly: false }, { routeId: data[8].id, isCompleted: true}),
  new ZwiftRoute({ ...data[9], sports: 'cycling', eventonly: true }, { routeId: data[9].id, isCompleted: true}),
  new ZwiftRoute({ ...data[10], sports: 'running', eventonly: true }, { routeId: data[10].id, isCompleted: true}),
  new ZwiftRoute({ ...data[11], sports: 'all', eventonly: true }, { routeId: data[11].id, isCompleted: true}),
  new ZwiftRoute({ ...data[12], sports: 'cycling', level: 10 }),
  new ZwiftRoute({ ...data[13], sports: 'running', level: 12 }),
  new ZwiftRoute({ ...data[14], sports: 'all', level: 14 }),
];

export const bike: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Metric} route={routeData[0]} />
  </div>
);

export const run: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Imperial} route={routeData[1]} />
  </div>
);

export const all: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Metric} route={routeData[2]} />
  </div>
);

export const bikeEvent: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Imperial} route={routeData[3]} />
  </div>
);

export const runEvent: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Metric} route={routeData[4]} />
  </div>
);

export const allEvent: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Imperial} route={routeData[5]} />
  </div>
);

export const bikeCompleted: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Metric} route={routeData[6]} />
  </div>
);

export const runCompleted: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Imperial} route={routeData[7]} />
  </div>
);

export const allCompleted: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Metric} route={routeData[8]} />
  </div>
);

export const bikeLevel: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Imperial} route={routeData[12]} />
  </div>
);

export const runLevel: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Metric} route={routeData[13]} />
  </div>
);

export const allLevel: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0', padding: '2rem' }}>
    <RouteDetails onCompletedChanged={action('onCompletedChanged')} displayUnits={DisplayUnits.Imperial} route={routeData[14]} />
  </div>
);
