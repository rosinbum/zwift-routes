import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BikeIcon from '@material-ui/icons/DirectionsBikeOutlined';
import RunIcon from '@material-ui/icons/DirectionsRunOutlined';
import { ZwiftRoutePropTypes } from '../../app-state/models/ZwiftRoute';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block'
  },
  icon: {
    display: 'inline',
    marginRight: theme.spacing(1)
  }
}));

const RouteIcons = ({ route }) => {
  const style = useStyles();
  const iconHolder = (icon) => <span className={style.icon}>{icon}</span>;

  return (
    <div className={style.root}>
      {route.isForCycling && iconHolder(<BikeIcon fontSize="large" />)}
      {route.isForRunning && iconHolder(<RunIcon fontSize="large" />)}
    </div>
  );
};

RouteIcons.propTypes = {
  route: PropTypes.shape(ZwiftRoutePropTypes).isRequired
};

export default RouteIcons;
