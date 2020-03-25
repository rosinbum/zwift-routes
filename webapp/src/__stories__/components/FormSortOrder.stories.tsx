import React from 'react';
import { action } from '@storybook/addon-actions';
import FormSortOrder from 'src/ui/components/FormSortOrder';
import { SortDirection, SortField, SortOrder } from 'src/models';

export default {
  title: 'Components/FormSortOrder'
};

const sortOrder: SortOrder = {
  sortField: SortField.RouteDistance,
  sortDirection: SortDirection.Ascending
};

export const normal: React.SFC<{}> = () => (
  <div style={{ width: '320px', background: '#F0F0F0' }}>
    <FormSortOrder onUpdate={action('onUpdate')} sortOrder={sortOrder} />
  </div>
);
