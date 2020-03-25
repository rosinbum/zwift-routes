/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import MasterDetailContainer from 'src/ui/containers/desktop/MasterDetailContainer';

describe('desktop', () => {
  describe('MasterDetailContainer', () => {
    it('contains the master element', () => {
      const masterComponent = (
        <div data-testid="test-master-section"></div>
      );
      const { queryByTestId } = render(
        <MasterDetailContainer master={masterComponent}>
          <div data-testid="test-detail-section"></div>
        </MasterDetailContainer>
      );

      const component = queryByTestId('test-master-section');
      expect(component).not.toBeNull();
    });

    it('contains the detail element', () => {
      const masterComponent = (
        <div data-testid="test-master-section"></div>
      );
      const { queryByTestId } = render(
        <MasterDetailContainer master={masterComponent}>
          <div data-testid="test-detail-section"></div>
        </MasterDetailContainer>
      );

      const component = queryByTestId('test-detail-section');
      expect(component).not.toBeNull();
    });
  });
});
