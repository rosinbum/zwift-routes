import React from 'react';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import ApplicationBar from 'components/appbar';
import ListRoutes, { ListRoutesProps } from 'components/list';
import ZwiftRoute from 'models/ZwiftRoute';
import useStyles from './stylesheet';

const ListRoutesPage = () => {
  const style = useStyles();
  const history = useHistory();
  const [drawer, setDrawer] = React.useState(false);

  /**
   * Event handler to open or close the drawer state.
   */
  const setDrawerState = (state: boolean) => () => {
    setDrawer(state);
  };

  /**
   * Event handler for pressing on a route in the list.
   * 
   * @param route the route that was selected
   */
  const onSelectRoute = (route: ZwiftRoute) => {
    history.push(`/route/${route.id}`);
  };

  const listRoutesProps: ListRoutesProps = {
    routes: [{ id: "1", name: "Test", isCompleted: false }],
    onSelectRoute
  };

  return (
    <div className={style.root}>
      <ApplicationBar 
        leftIcon="menu" 
        onLeftIconPressed={setDrawerState(true)} 
        title="Zwift Routes" />
      <div className={style.content}>
        <ListRoutes {...listRoutesProps} />
      </div>
      <Drawer anchor="left" open={drawer} onClose={setDrawerState(false)}>
        <div style={{ minWidth: '300px' }}/>
      </Drawer>
    </div>
  );
};

export default ListRoutesPage;
