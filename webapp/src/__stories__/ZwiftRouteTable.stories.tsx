import React from 'react';
import ZwiftRouteTable from 'src/ui/components/ZwiftRouteTable';
import { DisplayUnits, ZwiftRoute } from 'src/models';
import staticData from 'src/data/routes.json';

export default {
  title: 'ZwiftRouteTable'
};

const allRoutes = staticData.map((r) => new ZwiftRoute(r));
const route = allRoutes.find((r) => r.id === '26eaf3f2-ba6e-436e-a050-fc65c38ecbb2');

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
