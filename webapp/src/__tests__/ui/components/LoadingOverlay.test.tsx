import React from 'react';
import { shallow } from 'enzyme';
import { LoadingOverlay } from '../../../ui/components';

describe('LoadingOverlay', () => {
  // Snapshot test
  it('should render like the snapshot', () => {
    const component = shallow(<LoadingOverlay />);
    expect(component).toMatchSnapshot();
  });
});
