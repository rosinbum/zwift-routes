import React from 'react';
import PropTypes from 'prop-types';
import NotCompletedIcon from '@material-ui/icons/CancelOutlined';
import CompletedIcon from '@material-ui/icons/CheckCircleOutline';
import { green, grey } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { ZwiftRoutePropTypes } from '../../app-state/models/ZwiftRoute';

const RouteListItem = ({ onClick, route }) => {
  const icon = route.isCompleted
    ? <CompletedIcon fontSize="large" style={{ color: green[500] }} />
    : <NotCompletedIcon fontSize="large" style={{ color: grey[500] }} />;

  return (
    <ListItem button divider onClick={onClick}>
      <ListItemAvatar>{icon}</ListItemAvatar>
      <ListItemText primary={route.routeName} />
    </ListItem>
  );
};

RouteListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  route: PropTypes.shape(ZwiftRoutePropTypes).isRequired
};

export default RouteListItem;
