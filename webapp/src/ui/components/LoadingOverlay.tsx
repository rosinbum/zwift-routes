import React from 'react';
import { CircleSpinner } from 'react-spinners-kit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // Blank out the background
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    cursor: 'not-allowed',

    // Take over the whole screen
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',

    // Center all children
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }  
});

/**
 * Overlays the whole page with a spinner.
 */
const LoadingScreen: React.SFC<{}> = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <CircleSpinner size={64} />
    </div>
  );
};


export default LoadingScreen;