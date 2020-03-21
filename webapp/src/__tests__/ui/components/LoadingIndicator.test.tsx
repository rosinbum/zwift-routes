import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { LoadingIndicator } from '../../../ui/components';

describe('LoadingIndicator', () => {
  it('is disabled by default', async () => {
    const { queryByTestId } = render(
      <LoadingIndicator />
    );

    const warningIcon = queryByTestId('warning-icon');
    const dialogTitle = queryByTestId('dialog-title');
    const okButton = queryByTestId('ok-button');
    const progressBar = queryByTestId('progress-bar');
    const disabledIcon = queryByTestId('disabled-icon');

    expect(warningIcon).toBeNull();
    expect(dialogTitle).toBeNull();
    expect(okButton).toBeNull();
    expect(progressBar).toBeNull();
    expect(disabledIcon).not.toBeNull();
  });

  it('displays a loading spinner when loading', () => {
    const { queryByTestId } = render(
      <LoadingIndicator isLoading={true} />
    );

    const warningIcon = queryByTestId('warning-icon');
    const dialogTitle = queryByTestId('dialog-title');
    const okButton = queryByTestId('ok-button');
    const progressBar = queryByTestId('progress-bar');
    const disabledIcon = queryByTestId('disabled-icon');

    expect(warningIcon).toBeNull();
    expect(dialogTitle).toBeNull();
    expect(okButton).toBeNull();
    expect(progressBar).not.toBeNull();
    expect(disabledIcon).toBeNull();
  });

  it('displays an error icon when there is an error', () => {
    const { queryByTestId } = render(
      <LoadingIndicator error={new Error('test')} />
    );

    const warningIcon = queryByTestId('warning-icon');
    const dialogTitle = queryByTestId('dialog-title');
    const okButton = queryByTestId('ok-button');
    const progressBar = queryByTestId('progress-bar');
    const disabledIcon = queryByTestId('disabled-icon');

    expect(warningIcon).not.toBeNull();
    expect(dialogTitle).toBeNull();
    expect(okButton).toBeNull();
    expect(progressBar).toBeNull();
    expect(disabledIcon).toBeNull();
  });

  it('displays the dialog when the warning icon is clicked', async () => {
    const { getByTestId, queryByTestId } = render(
      <LoadingIndicator error={new Error('test')} />
    );

    const warningIcon = queryByTestId('warning-icon');
    expect(warningIcon).not.toBeNull();
    fireEvent.click(getByTestId('warning-icon'));

    const dialogTitle = await waitForElement(() => getByTestId('dialog-title'));
    expect(dialogTitle).not.toBeNull();

    // OK Button should close the dialog
    const okButton = await waitForElement(() => getByTestId('ok-button'));
    expect(okButton).not.toBeNull();
    fireEvent.click(okButton);
  });

  it('triggers onClick when the OK button in the dialog is clicked', async () => {
    const onClick = jest.fn();

    const { getByTestId, queryByTestId } = render(
      <LoadingIndicator error={new Error('test')} onClick={onClick} />
    );

    const warningIcon = queryByTestId('warning-icon');
    expect(warningIcon).not.toBeNull();
    fireEvent.click(getByTestId('warning-icon'));

    const okButton = await waitForElement(() => getByTestId('ok-button'));
    expect(okButton).not.toBeNull();
    fireEvent.click(okButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
