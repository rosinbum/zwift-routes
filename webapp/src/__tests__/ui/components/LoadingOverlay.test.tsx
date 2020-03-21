import React from 'react';
import { render } from '@testing-library/react';
import { LoadingOverlay } from '../../../ui/components';

describe('LoadingOverlay', () => {
  // Snapshot test
  it('should render like the snapshot', () => {
    const { container } = render(<LoadingOverlay />);
    expect(container).toMatchSnapshot();
  });
});
