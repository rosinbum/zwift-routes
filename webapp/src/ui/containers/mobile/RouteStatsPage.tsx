import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MobileSideMenu from './MobileSideMenu';
import RouteStatistics from '../desktop/RouteStatistics';
import { ReduxState } from 'src/redux/types';

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
const RouteStatsPage: React.SFC<{}> = () => {
  const style = useStyles();
  const history = useHistory();
  const routes = useSelector((state: ReduxState) => state.routes);
  const [ drawer, setDrawer ] = React.useState(false);

  return (
    <div className={style.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton className={style.menuIconButton} color="inherit" edge="start" onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Statistics
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={style.content}>
        <RouteStatistics title={false} routes={routes} />
      </div>
      <MobileSideMenu 
        onClose={() => setDrawer(false)} 
        onSelect={(route: string) => { setDrawer(false); history.replace(route); }} 
        open={drawer} 
      />
    </div>
  );
};

export default RouteStatsPage;
