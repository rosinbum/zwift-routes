import { makeStyles } from '@material-ui/core/styles';

/**
 * Stylesheet for the detailed route page
 */
const useStyles = makeStyles((theme) => ({
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
  content: {
    display: 'block',
    flexGrow: 1,
    overflowY: 'scroll'
  }
}));

export default useStyles;