import React from 'react';
import ZwiftInsiderLink from 'src/ui/components/ZwiftInsiderLink';
import routeData from 'src/data/routes.json';
import { ZwiftRoute } from 'src/models';

export default {
  title: 'Components/ZwiftInsiderLink'
};

const route = new ZwiftRoute(routeData[0]);
const noRoute = new ZwiftRoute({ ...routeData[0], link: undefined });

// Sub-story - is not completed
export const hasLink: React.SFC<{}> = () => (
  <div style={{ margin: '5rem', padding: '4px', border: '1px solid black' }}>
    <ZwiftInsiderLink route={route} />
  </div>
);

// Sub-story - is not completed
export const noLink: React.SFC<{}> = () => (
  <div style={{ margin: '5rem', padding: '4px', border: '1px solid black' }}>
    <ZwiftInsiderLink route={noRoute} />
  </div>
);