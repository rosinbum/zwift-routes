import React from 'react';
import AppBar from 'components/appbar';
import useStyles from './stylesheet';
 
/**
 * The main application component, which is needed to set up the routing
 * context for the application.
 */
const MainApplication: React.SFC<{}> = () => {
  const style = useStyles();

  const onLeftIconPressed = () => {
    console.log('Main Application: Left Icon Pressed');
  }

  return (
    <div className={style.root}>
      <AppBar
        leftIcon="back"
        onLeftIconPressed={onLeftIconPressed}
        title="Zwift Routes"/>
      <section className={style.mainSection}>
        <p>Main Content</p>
      </section>
    </div>
  );
};

export default MainApplication;
