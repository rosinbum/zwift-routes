import React from 'react';
import PropTypes from 'prop-types';
import NotCompletedIcon from '@material-ui/icons/CancelOutlined';
import CompletedIcon from '@material-ui/icons/CheckCircleOutline';
import { green, grey } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { ZwiftRoutePropTypes } from '../../app-state/models/ZwiftRoute';
import * as fmt from '../formatters';

const RouteListItem = ({ displayUnits, onClick, route }) => {
  const icon = route.isCompleted
    ? <CompletedIcon fontSize="large" style={{ color: green[500] }} />
    : <NotCompletedIcon fontSize="large" style={{ color: grey[500] }} />;

  const distance = fmt.formatDistance(route.routeDistance, displayUnits);
  const elevation = fmt.formatElevationGain(route.routeElevationGain, displayUnits);
  const difficulty = route.difficulty.toFixed(2);
  const secondaryText = `${distance}, ${elevation}, difficulty ${difficulty}`;

  return (
    <ListItem button divider onClick={onClick}>
      <ListItemAvatar>{icon}</ListItemAvatar>
      <ListItemText secondary={secondaryText}>
        <Typography variant="h6">{route.routeName}</Typography>
      </ListItemText>
    </ListItem>
  );
};

RouteListItem.propTypes = {
  displayUnits: PropTypes.oneOf(['imperial','metric']),
  onClick: PropTypes.func.isRequired,
  route: PropTypes.shape(ZwiftRoutePropTypes).isRequired
};

RouteListItem.defaultProps = {
  displayUnits: 'metric'
};

export default RouteListItem;
