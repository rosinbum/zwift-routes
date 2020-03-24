import React from 'react';
import { action } from '@storybook/addon-actions';
import FormFilter from 'src/ui/components/FormFilter';
import { RouteFilter, ZwiftRoute } from 'src/models';
import routeData from 'src/data/routes.json';

export default {
  title: 'Components/FormFilter'
};

const filter: RouteFilter = {
  includeCompletedRoutes: false,
  includeDefaultWorld: true,
  includeEventOnlyRoutes: false
};

const routes = routeData.map((r) => new ZwiftRoute(r));

export const normal: React.SFC<{}> = () => (
  <div style={{ width: '320px', background: '#F0F0F0' }}>
    <FormFilter onUpdate={action('onUpdate')} filter={filter} routes={routes} />
  </div>
);
