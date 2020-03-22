import React from 'react';
import { render } from '@testing-library/react';
import { DisplayUnits, ZwiftRoute } from 'src/models';
import { formatDistance, formatElevationGain } from 'src/utils';
import ZwiftRouteTable from 'src/ui/components/ZwiftRouteTable';
import staticData from 'src/data/routes.json';

const allRoutes = staticData.map((r) => new ZwiftRoute(r));
/* Volcano Circuit - lead-in */
const route2 = allRoutes[8];

describe('ZwiftRouteTable', () => {
  it('displays the lead-in data', () => {
    const { queryByText } = render(
      <ZwiftRouteTable displayUnits={DisplayUnits.Metric} route={route2} />
    );

    expect(queryByText(/lead[- ]in/i)).not.toBeNull();
  });

  it('displays the route data', () => {
    const { queryByText } = render(
      <ZwiftRouteTable displayUnits={DisplayUnits.Metric} route={route2} />
    );

    expect(queryByText(/route/i)).not.toBeNull();
  });

  it('displays the total data', () => {
    const { queryByText } = render(
      <ZwiftRouteTable displayUnits={DisplayUnits.Metric} route={route2} />
    );

    expect(queryByText(/total/i)).not.toBeNull();
  });

  it('displays the difficulty', () => {
    const { queryByText } = render(
      <ZwiftRouteTable displayUnits={DisplayUnits.Metric} route={route2} />
    );
    const expected = route2.difficulty.toFixed(2);
    expect(queryByText(new RegExp(expected, 'i'))).not.toBeNull();
  });

  it('shows miles for distance when using imperial units', () => {
    const { queryByText } = render(
      <ZwiftRouteTable displayUnits={DisplayUnits.Imperial} route={route2} />
    );
    const expected = formatDistance(route2.routeDistance, DisplayUnits.Imperial);
    expect(queryByText(new RegExp(expected, 'i'))).not.toBeNull();
  });

  it('shows kilometers for distance when using metric units', () => {
    const { queryByText } = render(
      <ZwiftRouteTable displayUnits={DisplayUnits.Metric} route={route2} />
    );
    const expected = formatDistance(route2.routeDistance, DisplayUnits.Metric);
    expect(queryByText(new RegExp(expected, 'i'))).not.toBeNull();
  });

  it('shows feet for elevation gain when using imperial units', () => {
    const { queryByText } = render(
      <ZwiftRouteTable displayUnits={DisplayUnits.Imperial} route={route2} />
    );
    const expected = formatElevationGain(route2.routeElevationGain, DisplayUnits.Imperial);
    expect(queryByText(new RegExp(expected, 'i'))).not.toBeNull();
  });

  it('shows meters for elevation gain when using metric units', () => {
    const { queryByText } = render(
      <ZwiftRouteTable displayUnits={DisplayUnits.Metric} route={route2} />
    );
    const expected = formatElevationGain(route2.routeElevationGain, DisplayUnits.Metric);
    expect(queryByText(new RegExp(expected, 'i'))).not.toBeNull();
  });
});
