import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import { ApplicationBar } from '../../components';
import RouteList from './RouteList';
import useStyles from './stylesheet';

const RouteListPage = () => {
  const style = useStyles();
  const history = useHistory();
  const [drawer, setDrawer] = React.useState(false);
  const routes = useSelector((state) => state.routes);

  /**
   * Event handler to show or hide the drawer.
   *
   * @param {boolean} state new state for the drawer (true = open)
   */
  const setDrawerVisibility = (state) => () => { setDrawer(state); };

  /**
   * Event handler that routes to the details page.
   *
   * @param {ZwiftRoute} route show this Zwift Route.
   */
  const onSelectRoute = (route) => { history.push(`/route/${route.id}`); };

  return (
    <div className={style.root}>
      <ApplicationBar
        leftIcon="menu"
        onLeftIconPressed={setDrawerVisibility(true)}
        title="Zwift Routes"
      />
      <div className={style.content}>
        <RouteList routes={routes} onSelectRoute={onSelectRoute} />
      </div>
      <Drawer anchor="left" open={drawer} onClose={setDrawerVisibility(false)}>
        <div style={{ minWidth: '300px' }} />
      </Drawer>
    </div>
  );
};

export default RouteListPage;
