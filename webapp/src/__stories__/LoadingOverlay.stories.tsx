import React from 'react';
import LoadingOverlay from 'src/ui/components/LoadingOverlay';

export default {
  title: 'LoadingOverlay'
};

// Sub-story - normal usage
export const normal: React.SFC<{}> = () => (<LoadingOverlay />);
