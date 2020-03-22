import React from 'react';
import { action } from '@storybook/addon-actions';
import ZwiftRouteList from 'src/ui/components/ZwiftRouteList';
import { DisplayUnits, ZwiftRoute } from 'src/models';
import staticData from 'src/data/routes.json';

export default {
  title: 'ZwiftRouteList'
};

const allRoutes = staticData.map((r) => new ZwiftRoute(r));
allRoutes[1].isCompleted = true;

// Sub-story - imperial display
export const imperial: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;', width: '600px', maxWidth: '600px' }}>
    <ZwiftRouteList
      displayUnits={DisplayUnits.Imperial} 
      routes={allRoutes}
      onRouteSelected={action('onRouteSelected')}
    />
  </div>
);

// Sub-story - metric display
export const metric: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;', width: '600px', maxWidth: '600px' }}>
    <ZwiftRouteList
      displayUnits={DisplayUnits.Metric} 
      routes={allRoutes}
      onRouteSelected={action('onRouteSelected')}
    />
  </div>
);

