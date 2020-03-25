import React from 'react';
import ZwiftRouteTable from 'src/ui/components/ZwiftRouteTable';
import { DisplayUnits, ZwiftRoute } from 'src/models';
import staticData from 'src/data/routes.json';

export default {
  title: 'Components/ZwiftRouteTable'
};

const allRoutes = staticData.map((r) => new ZwiftRoute(r));
const route = allRoutes[8];

// Sub-story - imperial display
export const imperial: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;', width: '600px', maxWidth: '600px' }}>
    <ZwiftRouteTable
      displayUnits={DisplayUnits.Imperial} 
      route={route}
    />
  </div>
);

// Sub-story - imperial display
export const metric: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;', width: '600px', maxWidth: '600px' }}>
    <ZwiftRouteTable
      displayUnits={DisplayUnits.Metric} 
      route={route}
    />
  </div>
);
