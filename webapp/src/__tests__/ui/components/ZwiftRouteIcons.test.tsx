/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { ZwiftRoute, ZwiftRouteData } from 'src/models';
import { ZwiftRouteIcons } from 'src/ui/components';

const routeInfo: ZwiftRouteData = {
  id: 'test',
  name: 'test',
  eventonly: false,
  sports: 'all',
  difficulty: 0,
  distance: 0,
  elevation: 0,
  leadin_distance: 0,
  leadin_elevation: 0,
  world: 'Watopia'
};

describe('ZwiftRouteIcons', () => {
  it('displays the event icon when eventonly=true', () => {
    const route = new ZwiftRoute({...routeInfo, eventonly: true});
    const { queryByTestId } = render(<ZwiftRouteIcons route={route} />);

    expect(queryByTestId("event-icon")).not.toBeNull();
  });

  it('doesn\'t display the event icon when eventonly=false', () => {
    const route = new ZwiftRoute({...routeInfo, eventonly: false});
    const { queryByTestId } = render(<ZwiftRouteIcons route={route} />);

    expect(queryByTestId("event-icon")).toBeNull();
  });

  it('displays the cycling icon when isForCycling', () => {
    const route = new ZwiftRoute({...routeInfo, sports: 'cycling'});
    const { queryByTestId } = render(<ZwiftRouteIcons route={route} />);

    expect(queryByTestId("cycling-icon")).not.toBeNull();
  });

  it('doesn\'t display the cycling icon when !isForCycling', () => {
    const route = new ZwiftRoute({...routeInfo, sports: 'running'});
    const { queryByTestId } = render(<ZwiftRouteIcons route={route} />);

    expect(queryByTestId("cycling-icon")).toBeNull();
  });

  it('displays the running icon when isForRunning', () => {
    const route = new ZwiftRoute({...routeInfo, sports: 'running'});
    const { queryByTestId } = render(<ZwiftRouteIcons route={route} />);

    expect(queryByTestId("running-icon")).not.toBeNull();
  });

  it('doesn\'t display the running icon when !isForRunning', () => {
    const route = new ZwiftRoute({...routeInfo, sports: 'cycling'});
    const { queryByTestId } = render(<ZwiftRouteIcons route={route} />);

    expect(queryByTestId("running-icon")).toBeNull();
  });
});
