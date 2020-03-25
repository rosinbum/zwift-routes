import React from 'react';
import RouteStatistics from 'src/ui/containers/desktop/RouteStatistics';
import data from 'src/data/routes.json';
import { ZwiftRoute } from 'src/models';

export default {
  title: 'Desktop/RouteStatistics'
};

const routes = data.map((r, i) => {
  const route = new ZwiftRoute(r);
  if (i % 2 === 0) route.isCompleted = true;
  return route;
});

export const normal: React.SFC<{}> = () => (
  <div style={{ width: '600px', background: '#F0F0F0' }}>
    <RouteStatistics routes={routes} />
  </div>
);
