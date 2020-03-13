import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RouteDetailsHeader from './RouteDetailsHeader';
import RouteDetails from './RouteDetails';
import RouteBadge from './RouteBadge';
import ZwiftInsiderLink from './ZwiftInsiderLink';
import useStyles from './stylesheet';

const RouteDetailsPage = () => {
  const style = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const routes = useSelector((state) => state.routes);
  const route = routes.find((r) => r.id === id);
  const insiderLink = route.zwiftInsiderLink ? (
    <ZwiftInsiderLink link={route.zwiftInsiderLink} />
  ) : '';

  const backButtonProps = {
    'aria-label': 'back',
    className: style.backIconButton,
    color: 'inherit',
    edge: 'start',
    onClick: () => history.goBack()
  };

  return (
    <div className={style.root}>
      <AppBar position="relative">
        <div className={style.header}>
          <Toolbar>
            <IconButton {...backButtonProps}>
              <BackIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {`${route.zwiftWorld} Route`}
            </Typography>
          </Toolbar>
          <div className={style.headerContent}>
            <RouteDetailsHeader route={route} />
          </div>
        </div>
      </AppBar>
      <div className={style.content}>
        {insiderLink}
        <RouteBadge route={route} />
        <RouteDetails route={route} />
      </div>
    </div>
  );
};

export default RouteDetailsPage;
