import React from 'react';
import { shallow } from 'enzyme';
import { LoadingScreen } from '..';

describe('LoadingScreen', () => {
  it('should render like the snapshot', () => {
    const component = shallow(<LoadingScreen />);
    expect(component).toMatchSnapshot()
  });
});
