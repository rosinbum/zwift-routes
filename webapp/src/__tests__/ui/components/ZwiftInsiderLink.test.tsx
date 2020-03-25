/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { ZwiftRoute } from 'src/models';
import { ZwiftInsiderLink } from 'src/ui/components';
import routeData from 'src/data/routes.json';

describe('ZwiftInsiderLink', () => {
  it('shows a link when link is set', () => {
    const route = new ZwiftRoute(routeData[0]);
    const { queryByAltText } = render(<ZwiftInsiderLink route={route} />);
    expect(queryByAltText("Zwift Insider")).not.toBeNull();
  });

  it('does not show a link when no link is set', () => {
    const route = new ZwiftRoute({ ...routeData[0], link: undefined });
    const { queryByAltText } = render(<ZwiftInsiderLink route={route} />);
    expect(queryByAltText("Zwift Insider")).toBeNull();
  });
});
