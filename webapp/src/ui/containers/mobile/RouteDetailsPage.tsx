import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  CompletedIcon,
  WorldBadge,
  ZwiftInsiderLink,
  ZwiftRouteIcons,
  ZwiftRouteTable
} from 'src/ui/components';
import { ReduxState } from 'src/redux/types';
import { updateRoute } from 'src/redux/actions';
import { ZwiftRoute } from 'src/models';

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
  },
  infoBlock: {
    display: 'flex',
    flexFlow: 'row nowrap',
    margin: theme.spacing(2)
  },
  badge: {
    flexGrow: 1
  },
  infoRight: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1
  },
  infoTop: {
    display: 'block',
    textAlign: 'center'
  },
  infoBottom: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center'
  },
  zwiftInsiderBlock: {
    flexGrow: 1,
    textAlign: 'center'
  },
  completedBlock: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

const RouteDetailsPage: React.SFC<{}> = () => {
  const { id } = useParams();
  const style = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const routes: ZwiftRoute[] = useSelector((state: ReduxState) => state.routes);
  const route = routes.find((r) => r.id === id);
  const appSettings = useSelector((state: ReduxState) => state.app);

  if (!route) {
    return (
      <>
        <h1>Error: ID not found</h1>
        <p>ID: {id}</p>
      </>
    );
  }

  const onClick = (): void => {
    route.isCompleted = !route.isCompleted;
    dispatch(updateRoute(route))
  }

  return (
    <div className={style.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton className={style.menuIconButton} color="inherit" edge="start" onClick={() => history.goBack()}>
            <BackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, overflowX: 'hidden' }}>
            {route.routeName}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={style.content}>
        <div className={style.infoBlock}>
          <div className={style.badge}>
            <WorldBadge world={route.zwiftWorld} />
          </div>
          <div className={style.infoRight}>
            <div className={style.infoTop}>
              <ZwiftRouteIcons route={route} />
            </div>
            <div className={style.infoBottom}>
              <div className={style.zwiftInsiderBlock}>
                <ZwiftInsiderLink route={route} />
              </div>
              <div className={style.completedBlock}>
                <IconButton onClick={onClick}>
                  <CompletedIcon isCompleted={route.isCompleted} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <ZwiftRouteTable displayUnits={appSettings.display.units} route={route} />
      </div>
    </div>
  );
};

export default RouteDetailsPage;
