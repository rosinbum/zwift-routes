/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RouteDetails from 'src/ui/containers/desktop/RouteDetails';
import { ZwiftRoute, DisplayUnits } from 'src/models';
import routeData from 'src/data/routes.json';

describe('desktop', () => {
  describe('RouteDetails', () => {
    it('renders a basic route', () => {
      const route = new ZwiftRoute(routeData[0]);
      const { container } = render(<RouteDetails route={route} />);
      expect(container).toMatchSnapshot();
    });

    it('shows the world badge', () => {
      const route = new ZwiftRoute(routeData[0]);
      const { getByAltText } = render(<RouteDetails route={route} />);
      expect(getByAltText(route.zwiftWorld)).not.toBeNull();
    });

    it('shows the ZwiftInsiderLink', () => {
      const route = new ZwiftRoute(routeData[0]);
      const { queryByAltText } = render(<RouteDetails route={route} />);
      expect(queryByAltText("Zwift Insider")).not.toBeNull();
    });

    it('shows completed when complete', () => {
      const route = new ZwiftRoute(routeData[0]);
      const { queryByTestId } = render(<RouteDetails route={route} />);
      expect(queryByTestId('not-completed-icon')).not.toBeNull();
    });

    it('shows incomplete when incomplete', () => {
      const route = new ZwiftRoute(routeData[0], { routeId: routeData[0].id, isCompleted: true });
      const { queryByTestId } = render(<RouteDetails route={route} />);
      expect(queryByTestId('is-completed-icon')).not.toBeNull();
    });

    it('calls the callback when complete is clicked', () => {
      const callback = jest.fn();
      const route = new ZwiftRoute(routeData[0]);
      const { getByTestId } = render(<RouteDetails onCompletedChanged={callback} route={route} />);
      fireEvent.click(getByTestId('not-completed-icon'));
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('accepts clicks on completion indicator', () => {
      const route = new ZwiftRoute(routeData[0]);
      const { getByTestId, queryByTestId } = render(<RouteDetails route={route} />);
      expect(queryByTestId('not-completed-icon')).not.toBeNull();
      fireEvent.click(getByTestId('not-completed-icon'));
    });
  });
});
