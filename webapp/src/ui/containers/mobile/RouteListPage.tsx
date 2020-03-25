import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ReduxState } from 'src/redux/types';
import { getComparator } from 'src/utils';
import { ZwiftRoute } from 'src/models';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MobileSideMenu from './MobileSideMenu';
import { ZwiftRouteList } from 'src/ui/components';

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

const RouteListPage: React.SFC<{}> = () => {
  const style = useStyles();
  const history = useHistory();
  const [ drawer, setDrawer ] = React.useState(false);
  const routes: ZwiftRoute[] = useSelector((state: ReduxState) => state.routes);
  const appSettings = useSelector((state: ReduxState) => state.app);

  const routeList = routes
    .filter((r) => r.isMatch(appSettings.filter))
    .sort(getComparator(appSettings.sortOrder));

  const onRouteSelected = (id: string): void => {
    history.push(`/details/${id}`);
  };

  return (
    <div className={style.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton className={style.menuIconButton} color="inherit" edge="start" onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Zwift Routes
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={style.content}>
        <ZwiftRouteList
          displayUnits={appSettings.display.units}
          routes={routeList}
          onRouteSelected={onRouteSelected}
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

export default RouteListPage;
