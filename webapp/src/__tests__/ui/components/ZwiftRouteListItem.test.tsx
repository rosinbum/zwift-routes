/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ZwiftRouteListItem } from 'src/ui/components';
import { DisplayUnits, ZwiftRoute } from 'src/models';
import { formatDistance } from 'src/utils';
import staticData from 'src/data/routes.json';

const allRoutes = staticData.map((r) => new ZwiftRoute(r));
allRoutes[1].isCompleted = true;

describe('ZwiftRouteListItem', () => {
  it('renders a list item', () => {
    const { queryByTestId } = render(
      <ZwiftRouteListItem 
        displayUnits={DisplayUnits.Metric}
        route={allRoutes[0]} 
      />
    );

    const listItem = queryByTestId(allRoutes[0].id);
    expect(listItem).not.toBeNull();
  });

  it('shows the route name', () => {
    const { queryByText } = render(
      <ZwiftRouteListItem 
        displayUnits={DisplayUnits.Metric}
        route={allRoutes[0]}
      />
    );

    const titleElem = queryByText(allRoutes[0].routeName);
    expect(titleElem).not.toBeNull();
  });

  it('shows the completed icon when appropriate', () => {
    const { queryByTestId } = render(
      <ZwiftRouteListItem 
        displayUnits={DisplayUnits.Metric}
        route={allRoutes[1]} 
      />
    );

    const icon = queryByTestId('is-completed-icon');
    expect(icon).not.toBeNull();
  });

  it('shows the not completed icon when appropriate', () => {
    const { queryByTestId } = render(
      <ZwiftRouteListItem 
        displayUnits={DisplayUnits.Metric}
        route={allRoutes[0]}
      />
    );

    const icon = queryByTestId('not-completed-icon');
    expect(icon).not.toBeNull();
  });

  it('shows miles when using Imperial units', () => {
    const handleClick = jest.fn();
    const { queryByText } = render(
      <ZwiftRouteListItem 
        displayUnits={DisplayUnits.Imperial}
        route={allRoutes[0]}
        onClick={handleClick} 
      />
    );
    const expected = formatDistance(allRoutes[0].routeDistance, DisplayUnits.Imperial);
    const elem = queryByText(new RegExp(expected));
    expect(elem).not.toBeNull();
  });

  it('shows kilometers when using Metric units', () => {
    const handleClick = jest.fn();
    const { queryByText } = render(
      <ZwiftRouteListItem 
        displayUnits={DisplayUnits.Metric}
        route={allRoutes[0]}
        onClick={handleClick} 
      />
    );
    const expected = formatDistance(allRoutes[0].routeDistance, DisplayUnits.Metric);
    const elem = queryByText(new RegExp(expected));
    expect(elem).not.toBeNull();
  });

  it('is clickable', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <ZwiftRouteListItem 
        displayUnits={DisplayUnits.Metric}
        route={allRoutes[0]}
        onClick={handleClick} 
      />
    );
    fireEvent.click(getByTestId(allRoutes[0].id));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is clickable without onClick', () => {
    const { getByTestId } = render(
      <ZwiftRouteListItem 
        displayUnits={DisplayUnits.Metric}
        route={allRoutes[0]}
      />
    );
    const listItem = getByTestId(allRoutes[0].id);
    expect(listItem).not.toBeNull();
    fireEvent.click(getByTestId(allRoutes[0].id));
  });
});
