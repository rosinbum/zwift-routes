import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import RouteListItem from './RouteListItem';
import { ZwiftRoutePropTypes } from '../../app-state/models/ZwiftRoute';

const RouteList = ({ routes, onSelectRoute }) => {
  /**
   * Event handler to display the Zwift Route details.
   *
   * @param {ZwiftRoute} route the zwift route to display
   */
  const onClick = (route) => () => { onSelectRoute(route); };

  return (
    <List>
      {routes.map((r) => (<RouteListItem key={r.id} onClick={onClick(r)} route={r} />))}
    </List>
  );
};

// TODO: Adjust PropTypes.array to PropTypes.arrayOf(ZwiftRoute)
RouteList.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape(ZwiftRoutePropTypes)
  ).isRequired,
  onSelectRoute: PropTypes.func.isRequired
};

export default RouteList;
