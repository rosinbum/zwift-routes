import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import RouteIcons from './RouteIcons';
import { ZwiftRoutePropTypes } from '../../app-state/models/ZwiftRoute';
import { routeDetailsHeader as useStyles } from './stylesheet';

const RouteDetailsHeader = ({ route }) => {
  const style = useStyles();
  const eventOnly = route.isEventOnly ? '(Event only)' : '';
  const levelIndicator = route.minimumZwiftLevel === 0 ? '' : (
    <div className={style.routeLevel}>
      <Typography variant="h6">
        {`${route.minimumZwiftLevel}+`}
      </Typography>
    </div>
  );

  return (
    <div className={style.root}>
      <Typography variant="h6">{route.routeName}</Typography>
      <Typography className={style.eventOnlyText} variant="body1">{eventOnly}</Typography>
      {levelIndicator}
      <div className={style.routeIcons}>
        <RouteIcons route={route} />
      </div>
    </div>
  );
};

RouteDetailsHeader.propTypes = {
  route: PropTypes.shape(ZwiftRoutePropTypes).isRequired
};

export default RouteDetailsHeader;
