import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorDialog from './dialogs/ErrorDialog';
import Loading from './Loading';
import RouteDetailsPage from './route-details';
import RouteListPage from './route-list';
import { clearNetworkError } from '../app-state/actions';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'white'
  }
}));

const MainApplication = () => {
  const style = useStyles();
  const routes = useSelector((state) => state.routes);
  const dispatch = useDispatch();
  const networkRequests = useSelector((state) => state.network.requests);
  const networkError = useSelector((state) => state.network.error);
  const inProgress = networkRequests > 0;

  if (routes.length === 0) {
    return (<Loading />);
  }

  const onDialogClose = () => {
    dispatch(clearNetworkError());
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/route/:id"><RouteDetailsPage /></Route>
          <Route path="/"><RouteListPage /></Route>
        </Switch>
      </Router>
      <Backdrop className={style.backdrop} open={inProgress}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ErrorDialog error={networkError} onClose={onDialogClose} />
    </>
  );
};

export default MainApplication;
