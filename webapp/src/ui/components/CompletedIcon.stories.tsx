import React from 'react';
import CompletedIcon from './CompletedIcon';

export default {
  title: 'CompletedIcon'
};

// Sub-story - normal usage
export const normal: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <CompletedIcon />
  </div>
);

// Sub-story - is not completed
export const notCompleted: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <CompletedIcon isCompleted={false} />
  </div>
);

// Sub-story - is not completed
export const completed: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <CompletedIcon isCompleted={true} />
  </div>
);
