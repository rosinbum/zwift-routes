import React from 'react';
import Container from '@material-ui/core/Container';
import MasterDetailContainer from 'src/ui/containers/desktop/MasterDetailContainer';

export default {
  title: 'Desktop/MasterDetailContainer'
};

const masterContainer = (
  <div style={{ border: '2px solid blue', height: '100%' }}></div>
);

const detailContainer = (
  <div style={{ border: '2px solid purple', height: '100%' }}></div>
);

export const normal: React.SFC<{}> = () => (
  <Container maxWidth="lg">
    <MasterDetailContainer master={masterContainer}>
      {detailContainer}
    </MasterDetailContainer>
  </Container>
);
