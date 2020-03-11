import { makeStyles } from '@material-ui/core/styles';

/**
 * Stylesheet for the main application.  This implements a full-page
 * flexbox with a main section that "grows" and scrolls the content
 * vertically.
 */
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    left: 0,
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  mainSection: {
    display: 'block',
    flexGrow: 1,
    overflowY: 'scroll'
  }
});

export default useStyles;
