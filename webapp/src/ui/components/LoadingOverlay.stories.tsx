import React from 'react';
import LoadingOverlay from './LoadingOverlay';

export default {
  title: 'LoadingOverlay'
};

// Sub-story - normal usage
export const normal: React.SFC<{}> = () => (<LoadingOverlay />);
