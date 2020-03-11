import { makeStyles } from '@material-ui/core/styles';

/**
 * Stylesheet for the application bar.
 */
const useStyles = makeStyles((theme) => ({
  emptyIcon: {
    display: 'inline-block',
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    width: '1.5rem'
  },
  leftIconButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default useStyles;