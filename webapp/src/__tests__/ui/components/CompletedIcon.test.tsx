/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { CompletedIcon } from '../../../ui/components';

describe('CompletedIcon', () => {
  it('displays not completed by default', () => {
    const { queryByTestId } = render(
      <CompletedIcon />
    );

    const noIcon = queryByTestId('not-completed-icon');
    const yesIcon = queryByTestId('is-completed-icon');

    expect(noIcon).not.toBeNull();
    expect(yesIcon).toBeNull();
  });

  it('displays not completed when isCompleted=false', () => {
    const { queryByTestId } = render(
      <CompletedIcon isCompleted={false} />
    );

    const noIcon = queryByTestId('not-completed-icon');
    const yesIcon = queryByTestId('is-completed-icon');

    expect(noIcon).not.toBeNull();
    expect(yesIcon).toBeNull();
  });

  it('displays completed when isCompleted=true', () => {
    const { queryByTestId } = render(
      <CompletedIcon isCompleted={true} />
    );

    const noIcon = queryByTestId('not-completed-icon');
    const yesIcon = queryByTestId('is-completed-icon');

    expect(noIcon).toBeNull();
    expect(yesIcon).not.toBeNull();
  });
});
