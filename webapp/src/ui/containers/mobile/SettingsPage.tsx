import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MobileSideMenu from './MobileSideMenu';
import { FormDisplay, FormFilter, FormSortOrder } from 'src/ui/components';
import { ReduxState } from 'src/redux/types';
import { DisplaySettings, RouteFilter, SortOrder } from 'src/models';
import * as actions from 'src/redux/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
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
  },
  menuIconButton: {
    marginRight: theme.spacing(2)
  }
}));
const SettingsPage: React.SFC<{}> = () => {
  const style = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const routes = useSelector((state: ReduxState) => state.routes);
  const appSettings = useSelector((state: ReduxState) => state.app);
  const [ drawer, setDrawer ] = React.useState(false);

  const onUpdateDisplaySettings = (displaySettings: DisplaySettings): void => {
    dispatch(actions.setDisplay(displaySettings));
  };

  const onUpdateFilter = (filter: RouteFilter): void => {
    dispatch(actions.setFilter(filter));
  };

  const onUpdateSortOrder = (sortOrder: SortOrder): void => {
    dispatch(actions.setSort(sortOrder));
  };

  return (
    <div className={style.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton className={style.menuIconButton} color="inherit" edge="start" onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={style.content}>
        <FormFilter 
          filter={appSettings.filter} 
          routes={routes} 
          onUpdate={onUpdateFilter} 
        />
        <FormSortOrder 
          sortOrder={appSettings.sortOrder} 
          onUpdate={onUpdateSortOrder} 
        />
        <FormDisplay 
          displaySettings={appSettings.display} 
          onUpdate={onUpdateDisplaySettings} 
        />
      </div>
      <MobileSideMenu 
        onClose={() => setDrawer(false)} 
        onSelect={(route: string) => { setDrawer(false); history.replace(route); }} 
        open={drawer} 
      />
    </div>
  );
};

export default SettingsPage;

