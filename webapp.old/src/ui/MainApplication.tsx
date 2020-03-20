import React from 'react';
import Media from 'react-media';
import MobileApplication from './MobileApplication';
import DesktopApplication from './DesktopApplication';

const MainApplication: React.SFC<{}> = () => {
  const mediaQueries = {
    mobile:  `(max-width: 599px)`,
    desktop: `(min-width: 600px)`
  };

  return (
    <Media queries={mediaQueries}>
      { matches => (
        <>
        { matches.mobile && <MobileApplication />}
        { matches.desktop && <DesktopApplication />}
        </>
      )}
    </Media>
  );
};

export default MainApplication;
