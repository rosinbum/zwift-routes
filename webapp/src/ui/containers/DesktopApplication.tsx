import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import StatisticsIcon from '@material-ui/icons/EmojiEvents';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MasterDetailContainer from './desktop/MasterDetailContainer';
import RouteDetails from './desktop/RouteDetails';
import RouteStatistics from './desktop/RouteStatistics';
import TopApplicationBar from './desktop/TopApplicationBar';
import { ZwiftRouteList } from 'src/ui/components';
import { ReduxState } from 'src/redux/types';
import { getComparator } from 'src/utils';
import { clearError } from 'src/redux/actions';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullPage: {
    backgroundColor: '#F0F0F0',
    height: '100%',
    left: 0,
    margin: 0,
    padding: 0,
    position: 'fixed',
    top: 0,
    width: '100%'
  },
  mainLayout: {
    alignItems: 'stretch',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start'
  },
  mainContent: {
    alignSelf: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    maxWidth: '1280px',
    width: '100%'
  },
  drawerPaper: {
    marginTop: '64px',
    width: drawerWidth
  },
  drawer: theme.mixins.toolbar
}));

/**
 * Desktop version of the Zwift Routes application.  This is a master
 * detail version, where the left-hand side of the screen is the list
 * of routes, and the right-hand side is filled in with the details of
 * the route.
 */
const DesktopApplication: React.SFC<{}> = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [drawerIsOpen, setDrawer] = React.useState(false);
  const appState = useSelector((state: ReduxState) => state.app);
  const routes = useSelector((state: ReduxState) => state.routes);

  const routeList = routes
    .filter((r) => r.isMatch(appState.filter))
    .sort(getComparator(appState.sortOrder));

  const openDrawer = (): void => { 
    setDrawer(true);  
  };

  const openSettings = (): void => { /* TODO: Do nothing */ }

  const closeDrawer = (): void => { 
    setDrawer(false); 
  };

  const acknowledgeError = (): void => { 
    dispatch(clearError()); 
  };

  const goToPage = (route: string) => (): void => {
    setDrawer(false);
    history.replace(route);
  };

  const goToDetails = (id: string): void => {
    history.replace(`/details/${id}`);
  };

  const masterComponent = (
    <ZwiftRouteList 
      displayUnits={appState.display.units}
      routes={routeList}
      onRouteSelected={goToDetails} />
  );

  const Details: React.SFC<{}> = () => {
    const { id } = useParams();
    const route = routes.find((r) => r.id === id);
    if (route) {
      return (<RouteDetails displayUnits={appState.display.units} route={route} />);
    }
    return (<div>An error occurred: id = {id}</div>);
  };

  return (
    <>
      <div className={[styles.fullPage, styles.mainLayout].join(' ')}>
        <div>
          <TopApplicationBar
            isBusy={appState.requests > 0}
            error={appState.error}
            onAcknowledgeError={acknowledgeError}
            onOpenMenu={openDrawer} 
            onOpenSettings={openSettings}
          />
        </div>
        <div className={styles.mainContent}>
          <MasterDetailContainer master={masterComponent}>
            <Switch>
              <Route path="/stats"><RouteStatistics routes={routes} /></Route>
              <Route path="/details/:id"><Details /></Route>
              <Route path="/"><RouteStatistics routes={routes} /></Route>
            </Switch>
          </MasterDetailContainer>
        </div>
      </div>
      <Drawer classes={{ paper: styles.drawerPaper }} anchor="left" open={drawerIsOpen} onClose={closeDrawer}>
        <div className={styles.drawer}>
          <List>
            <ListItem button onClick={goToPage('/stats')} key="menu1">
              <ListItemIcon><StatisticsIcon /></ListItemIcon>
              <ListItemText>Statistics</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};



export default DesktopApplication;
