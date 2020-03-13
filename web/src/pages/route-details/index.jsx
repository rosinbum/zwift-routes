import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import NotCompletedIcon from '@material-ui/icons/CancelOutlined';
import CompletedIcon from '@material-ui/icons/CheckCircleOutline';
import { green, grey } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CompleteRideDialog from '../dialogs/CompleteRideDialog';
import RouteDetailsHeader from './RouteDetailsHeader';
import RouteDetails from './RouteDetails';
import RouteBadge from './RouteBadge';
import ZwiftInsiderLink from './ZwiftInsiderLink';
import useStyles from './stylesheet';
import { completeRoute } from '../../app-state/actions';

const RouteDetailsPage = () => {
  const style = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const routes = useSelector((state) => state.routes);
  const route = routes.find((r) => r.id === id);
  const insiderLink = route.zwiftInsiderLink ? (
    <ZwiftInsiderLink link={route.zwiftInsiderLink} />
  ) : '';
  const completedIcon = route.isCompleted
    ? <CompletedIcon style={{ fontSize: '3rem', color: green[500] }} />
    : <NotCompletedIcon style={{ fontSize: '3rem', color: grey[500] }} />;

  const backButtonProps = {
    'aria-label': 'back',
    className: style.backIconButton,
    color: 'inherit',
    edge: 'start',
    onClick: () => history.goBack()
  };

  // Opens or closes the "complete ride" dialog.
  const onCompletion = () => setOpenDialog(true);

  // Submits the "complete ride" dialog result.
  const onCompleteRide = (newValue) => {
    dispatch(completeRoute(id, newValue));
    setOpenDialog(false);
  };

  return (
    <>
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
          <div className={style.completedButton}>
            <IconButton onClick={onCompletion}>
              {completedIcon}
            </IconButton>
          </div>
          <RouteBadge route={route} />
          <RouteDetails route={route} />
        </div>
      </div>
      <CompleteRideDialog open={openDialog} onClose={(v) => onCompleteRide(v)} />
    </>
  );
};

export default RouteDetailsPage;
