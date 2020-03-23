import React from 'react';
import { action } from '@storybook/addon-actions';
import TopApplicationBar from 'src/ui/containers/desktop/TopApplicationBar';

export default {
  title: 'Desktop/TopApplicationBar'
};

export const normal: React.SFC<{}> = () => (
  <TopApplicationBar
    isBusy={false}
    onAcknowledgeError={action('onClickLoader')}
    onOpenMenu={action('onOpenMenu')}
    onOpenSettings={action('onOpenSettings')}
  />
);

export const loading: React.SFC<{}> = () => (
  <TopApplicationBar
    isBusy={true}
    onAcknowledgeError={action('onClickLoader')}
    onOpenMenu={action('onOpenMenu')}
    onOpenSettings={action('onOpenSettings')}
  />
);

export const error: React.SFC<{}> = () => (
  <TopApplicationBar
    isBusy={false}
    error={new Error('test error')}
    onAcknowledgeError={action('onClickLoader')}
    onOpenMenu={action('onOpenMenu')}
    onOpenSettings={action('onOpenSettings')}
  />
);
