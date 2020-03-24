/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import RouteStatistics from 'src/ui/containers/desktop/RouteStatistics';
import routeData from 'src/data/routes.json';
import { ZwiftRoute } from 'src/models';

const routes: ZwiftRoute[] = routeData.map((r, i) => {
  const route = new ZwiftRoute(r);
  if (i % 2 === 0) route.isCompleted = true;
  return route;
});

describe('desktop', () => {
  describe('RouteStatistics', () => {
    // Snapshot test
    it('should render like the snapshot', () => {
      const { container } = render(<RouteStatistics routes={routes} />);
      expect(container).toMatchSnapshot();
    });
  });
});
