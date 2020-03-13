import { makeStyles } from '@material-ui/core/styles';
import { badgeOffset } from './RouteBadge';
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
  header: {
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  headerContent: {
    marginBottom: badgeOffset
  },
  backIconButton: {
    marginRight: theme.spacing(2)
  },
  content: {
    display: 'block',
    flexGrow: 1,
    overflowY: 'scroll'
  }
}));

/**
 * Stylesheet for the RouteDetailsHeader component
 */
export const routeDetailsHeader = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column nowrap',
    margin: theme.spacing(2),
    marginBottom: 0
  },
  routeLevel: {
    bottom: 0,
    display: 'block',
    paddingLeft: theme.spacing(1),
    position: 'absolute',
    left: 0
  },
  routeIcons: {
    bottom: 0,
    display: 'block',
    position: 'absolute',
    right: 0
  },
  eventOnlyText: {
    minHeight: '1.5rem'
  }
}));

export default useStyles;
