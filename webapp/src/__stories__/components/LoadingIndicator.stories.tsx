import React from 'react';
import { action } from '@storybook/addon-actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoadingIndicator from 'src/ui/components/LoadingIndicator';

export default {
  title: 'Components/LoadingIndicator'
};

// Sub-story - normal usage
export const normal: React.SFC<{}> = () => (
  <AppBar>
    <Toolbar>
      <Typography style={{ flexGrow: 1 }} variant="h6" noWrap>Normal</Typography>
      <LoadingIndicator />
    </Toolbar>
  </AppBar>
);

// Sub-story - is loading
export const loading: React.SFC<{}> = () => (
  <AppBar>
    <Toolbar>
      <Typography style={{ flexGrow: 1 }} variant="h6" noWrap>Loading</Typography>
      <LoadingIndicator isLoading={true} />
    </Toolbar>
  </AppBar>
);

// Sub-story - is loading
export const error: React.SFC<{}> = () => (
  <AppBar>
    <Toolbar>
      <Typography style={{ flexGrow: 1 }} variant="h6" noWrap>Error</Typography>
      <LoadingIndicator error={new Error('error message')} onClick={action('onClick')} />
    </Toolbar>
  </AppBar>
);
