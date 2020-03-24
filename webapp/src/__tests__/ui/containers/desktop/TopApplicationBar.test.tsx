/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TopApplicationBar from 'src/ui/containers/desktop/TopApplicationBar';

describe('desktop', () => {
  describe('TopApplicationBar', () => {
    it('has a menu button', () => {
      const onOpenMenu = jest.fn();
      const onOpenSettings = jest.fn();
      const onAcknowledgeError = jest.fn();
      const { queryByTestId } = render(
        <TopApplicationBar
          isBusy={false}
          onOpenMenu={onOpenMenu}
          onOpenSettings={onOpenSettings}
          onAcknowledgeError={onAcknowledgeError}
        />
      );
      
      const menuButton = queryByTestId('menu-icon');
      expect(menuButton).not.toBeNull();
    });

    it('has a settings button', () => {
      const onOpenMenu = jest.fn();
      const onOpenSettings = jest.fn();
      const onAcknowledgeError = jest.fn();
      const { queryByTestId } = render(
        <TopApplicationBar
          isBusy={false}
          onOpenMenu={onOpenMenu}
          onOpenSettings={onOpenSettings}
          onAcknowledgeError={onAcknowledgeError}
        />
      );

      const settingsButton = queryByTestId('settings-icon');
      expect(settingsButton).not.toBeNull();
    });

    it('has a title', () => {
      const onOpenMenu = jest.fn();
      const onOpenSettings = jest.fn();
      const onAcknowledgeError = jest.fn();
      const { queryByText } = render(
        <TopApplicationBar
          isBusy={false}
          onOpenMenu={onOpenMenu}
          onOpenSettings={onOpenSettings}
          onAcknowledgeError={onAcknowledgeError}
        />
      );

      const title = queryByText('Zwift Routes');
      expect(title).not.toBeNull();
    });

    it('responds on a menu click', () => {
      const onOpenMenu = jest.fn();
      const onOpenSettings = jest.fn();
      const onAcknowledgeError = jest.fn();
      const { getByTestId, queryByTestId } = render(
        <TopApplicationBar
          isBusy={false}
          onOpenMenu={onOpenMenu}
          onOpenSettings={onOpenSettings}
          onAcknowledgeError={onAcknowledgeError}
        />
      );

      const menuButton = queryByTestId('menu-icon');
      expect(menuButton).not.toBeNull();
      fireEvent.click(getByTestId('menu-icon'));
      expect(onOpenMenu).toHaveBeenCalledTimes(1);
    });

    it('responds on a settings click', () => {
      const onOpenMenu = jest.fn();
      const onOpenSettings = jest.fn();
      const onAcknowledgeError = jest.fn();
      const { getByTestId, queryByTestId } = render(
        <TopApplicationBar
          isBusy={false}
          onOpenMenu={onOpenMenu}
          onOpenSettings={onOpenSettings}
          onAcknowledgeError={onAcknowledgeError}
        />
      );

      const settingsButton = queryByTestId('settings-icon');
      expect(settingsButton).not.toBeNull();
      fireEvent.click(getByTestId('settings-icon'));
      expect(onOpenSettings).toHaveBeenCalledTimes(1);
    });

    it('has a disabled icon by default', () => {
      const onOpenMenu = jest.fn();
      const onOpenSettings = jest.fn();
      const onAcknowledgeError = jest.fn();
      const { queryByTestId } = render(
        <TopApplicationBar
          isBusy={false}
          onOpenMenu={onOpenMenu}
          onOpenSettings={onOpenSettings}
          onAcknowledgeError={onAcknowledgeError}
        />
      );

      const loadingIcon = queryByTestId('disabled-icon');
      expect(loadingIcon).not.toBeNull();
    });

    it('shows a progress bar when loading', () => {
      const onOpenMenu = jest.fn();
      const onOpenSettings = jest.fn();
      const onAcknowledgeError = jest.fn();
      const { queryByTestId } = render(
        <TopApplicationBar
          isBusy={true}
          onOpenMenu={onOpenMenu}
          onOpenSettings={onOpenSettings}
          onAcknowledgeError={onAcknowledgeError}
        />
      );

      const loadingIcon = queryByTestId('progress-bar');
      expect(loadingIcon).not.toBeNull();
    });

    it('shows a warning icon when given an error', () => {
      const onOpenMenu = jest.fn();
      const onOpenSettings = jest.fn();
      const onAcknowledgeError = jest.fn();
      const { queryByTestId } = render(
        <TopApplicationBar
          isBusy={false}
          error={new Error('test error')}
          onOpenMenu={onOpenMenu}
          onOpenSettings={onOpenSettings}
          onAcknowledgeError={onAcknowledgeError}
        />
      );

      const loadingIcon = queryByTestId('warning-icon');
      expect(loadingIcon).not.toBeNull();
    });
  });
});
