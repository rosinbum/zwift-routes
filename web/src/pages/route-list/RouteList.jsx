import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import RouteListItem from './RouteListItem';
import { ZwiftRoutePropTypes } from '../../app-state/models/ZwiftRoute';

const RouteList = ({ displayUnits, routes, onSelectRoute }) => {
  /**
   * Event handler to display the Zwift Route details.
   *
   * @param {ZwiftRoute} route the zwift route to display
   */
  const onClick = (route) => () => { onSelectRoute(route); };

  return (
    <List>
      {routes.map((route) => (
        <RouteListItem
          key={route.id}
          displayUnits={displayUnits}
          onClick={onClick(route)}
          route={route}
        />
      ))}
    </List>
  );
};

// TODO: Adjust PropTypes.array to PropTypes.arrayOf(ZwiftRoute)
RouteList.propTypes = {
  displayUnits: PropTypes.oneOf(['imperial', 'metric']),
  routes: PropTypes.arrayOf(
    PropTypes.shape(ZwiftRoutePropTypes)
  ).isRequired,
  onSelectRoute: PropTypes.func.isRequired
};

RouteList.defaultProps = {
  displayUnits: 'metric'
};

export default RouteList;
