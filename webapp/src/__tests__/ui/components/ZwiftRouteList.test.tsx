import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DisplayUnits, ZwiftRoute } from '../../../models';
import staticData from '../../../services/data/routes.json';
import { ZwiftRouteList } from '../../../ui/components';

const allRoutes = staticData.map((r) => new ZwiftRoute(r));
allRoutes[1].isCompleted = true;
const sliceOfRoutes = allRoutes.slice(0, 5);

describe('ZwiftRouteList', () => {
  it('renders a list', () => {
    const { getByTestId } = render(
      <ZwiftRouteList routes={sliceOfRoutes} displayUnits={DisplayUnits.Metric} />
    );

    expect(getByTestId(sliceOfRoutes[0].id)).not.toBeNull();
    expect(getByTestId(sliceOfRoutes[1].id)).not.toBeNull();
    expect(getByTestId(sliceOfRoutes[2].id)).not.toBeNull();
    expect(getByTestId(sliceOfRoutes[3].id)).not.toBeNull();
    expect(getByTestId(sliceOfRoutes[4].id)).not.toBeNull();
  });

  it('can be clicked without specifying a click handler', () => {
    const { getByTestId } = render(
      <ZwiftRouteList routes={sliceOfRoutes} />
    );

    fireEvent.click(getByTestId(sliceOfRoutes[0].id));
    expect(getByTestId(sliceOfRoutes[0].id)).not.toBeNull();
  });

  it('passes the route ID to the click handler', () => {
    const handler = jest.fn();
    const { getByTestId } = render(
      <ZwiftRouteList 
        routes={sliceOfRoutes} 
        displayUnits={DisplayUnits.Metric}
        onRouteSelected={handler}
      />
    );

    fireEvent.click(getByTestId(sliceOfRoutes[0].id));
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0]).toStrictEqual(sliceOfRoutes[0].id);
  });
});
