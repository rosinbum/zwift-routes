import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StatisticsIcon from '@material-ui/icons/EmojiEvents';
import Typography from '@material-ui/core/Typography';
import MasterDetailContainer from './desktop/MasterDetailContainer';
import RouteDetails from './desktop/RouteDetails';
import RouteStatistics from './desktop/RouteStatistics';
import TopApplicationBar from './desktop/TopApplicationBar';
import { FormDisplay, FormFilter, FormSortOrder, ZwiftRouteList } from 'src/ui/components';
import { ReduxState } from 'src/redux/types';
import { getComparator } from 'src/utils';
import { DisplaySettings, RouteFilter, SortOrder } from 'src/models';
import * as actions from 'src/redux/actions'; 

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
  drawer: theme.mixins.toolbar,
  dialogTitle: {
    margin: 0,
    padding: theme.spacing(2)
  },
  dialogClose: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
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
  const [settingsIsOpen, setSettings] = React.useState(false);
  const appState = useSelector((state: ReduxState) => state.app);
  const routes = useSelector((state: ReduxState) => state.routes);

  const routeList = routes
    .filter((r) => r.isMatch(appState.filter))
    .sort(getComparator(appState.sortOrder));

  const acknowledgeError = (): void => { 
    dispatch(actions.clearError()); 
  };

  const goToPage = (route: string) => (): void => {
    setDrawer(false);
    history.replace(route);
  };

  const goToDetails = (id: string): void => {
    history.replace(`/details/${id}`);
  };

  const updateDisplaySettings = (displaySettings: DisplaySettings): void => {
    dispatch(actions.setDisplay(displaySettings));
  };

  const updateRouteFilter = (filter: RouteFilter): void => {
    dispatch(actions.setFilter(filter));
  };

  const updateSortOrder = (sortOrder: SortOrder): void => {
    dispatch(actions.setSort(sortOrder));
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
    
    const markCompleted = (isCompleted: boolean): void => {
      if (route) {
        route.isCompleted = isCompleted;
        dispatch(actions.updateRoute(route));
      }
    };

    if (route) {
      return (
        <RouteDetails 
          displayUnits={appState.display.units} 
          onCompletedChanged={markCompleted}
          route={route} 
        />
      );
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
            onOpenMenu={() => setDrawer(true)} 
            onOpenSettings={() => setSettings(true)}
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
      <Drawer classes={{ paper: styles.drawerPaper }} anchor="left" open={drawerIsOpen} onClose={() => setDrawer(false)}>
        <div className={styles.drawer}>
          <List>
            <ListItem button onClick={goToPage('/stats')} key="menu1">
              <ListItemIcon><StatisticsIcon /></ListItemIcon>
              <ListItemText>Statistics</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Dialog onClose={() => setSettings(false)} open={settingsIsOpen}>
        <DialogTitle disableTypography className={styles.dialogTitle}>
          <Typography variant="h6">Settings</Typography>
          <IconButton className={styles.dialogClose} onClick={() => setSettings(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <FormFilter routes={routes} filter={appState.filter} onUpdate={updateRouteFilter} />
          <FormSortOrder sortOrder={appState.sortOrder} onUpdate={updateSortOrder} />
          <FormDisplay displaySettings={appState.display} onUpdate={updateDisplaySettings} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setSettings(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};



export default DesktopApplication;
