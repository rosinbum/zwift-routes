import React from 'react';
import { action } from '@storybook/addon-actions';
import ZwiftRouteListItem from 'src/ui/components/ZwiftRouteListItem';
import { DisplayUnits, ZwiftRoute } from 'src/models';
import staticData from 'src/data/routes.json';

export default {
  title: 'ZwiftRouteListItem'
};

const allRoutes = staticData.map((r) => new ZwiftRoute(r));
allRoutes[1].isCompleted = true;

// Sub-story - not completed, imperial display
export const imperialNotCompleted: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;', width: '600px', maxWidth: '600px' }}>
    <ZwiftRouteListItem 
      displayUnits={DisplayUnits.Imperial} 
      route={allRoutes[0]} 
      onClick={action('onClick')}
    />
  </div>
);

// Sub-story - completed, imperial display
export const imperialCompleted: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;', width: '600px', maxWidth: '600px' }}>
    <ZwiftRouteListItem 
      displayUnits={DisplayUnits.Imperial} 
      route={allRoutes[1]}
      onClick={action('onClick')} 
    />
  </div>
);

// Sub-story - not completed, imperial display
export const metricNotCompleted: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;', width: '600px', maxWidth: '600px' }}>
    <ZwiftRouteListItem 
      displayUnits={DisplayUnits.Metric} 
      route={allRoutes[0]} 
      onClick={action('onClick')}
    />
  </div>
);

// Sub-story - completed, imperial display
export const metricCompleted: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;', width: '600px', maxWidth: '600px' }}>
    <ZwiftRouteListItem 
      displayUnits={DisplayUnits.Metric} 
      route={allRoutes[1]} 
      onClick={action('onClick')}
    />
  </div>
);

