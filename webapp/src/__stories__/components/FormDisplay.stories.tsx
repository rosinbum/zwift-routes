import React from 'react';
import { action } from '@storybook/addon-actions';
import FormDisplay from 'src/ui/components/FormDisplay';
import { DisplayUnits, DisplaySettings } from 'src/models';

export default {
  title: 'Components/FormDisplay'
};

const displaySettings: DisplaySettings = {
  units: DisplayUnits.Imperial
};

export const normal: React.SFC<{}> = () => (
  <div style={{ width: '320px', background: '#F0F0F0' }}>
    <FormDisplay onUpdate={action('onUpdate')} displaySettings={displaySettings} />
  </div>
);
