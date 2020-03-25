import React from 'react';
import WorldBadge from 'src/ui/components/WorldBadge';

export default {
  title: 'Components/WorldBadge'
};

// Sub-story - Bologna
export const bologna: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <WorldBadge world="Bologna" />
  </div>
);

// Sub-story - Crit City
export const critCity: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <WorldBadge world="Crit City" />
  </div>
);

// Sub-story - London
export const london: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <WorldBadge world="London" />
  </div>
);

// Sub-story - New York
export const newYork: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <WorldBadge world="New York" />
  </div>
);

// Sub-story - Richmond
export const richmond: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <WorldBadge world="Richmond" />
  </div>
);

// Sub-story - Watopia
export const watopia: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <WorldBadge world="Watopia" />
  </div>
);

// Sub-story - Yorkshire
export const yorkshire: React.SFC<{}> = () => (
  <div style={{ margin: '5rem;' }}>
    <WorldBadge world="Yorkshire" />
  </div>
);
