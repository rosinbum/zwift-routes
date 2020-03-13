import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ZwiftRoutePropTypes } from '../../app-state/models/ZwiftRoute';

import CritCity from '../../assets/badges/CritCity.png';
import London from '../../assets/badges/London.png';
import NewYork from '../../assets/badges/NewYork.png';
import Watopia from '../../assets/badges/Watopia.png';

/* eslint-disable quote-props */
const badges = {
  'Crit City': CritCity,
  'London': London,
  'New York': NewYork,
  'Watopia': Watopia
};
/* eslint-enable quote-props */

export const badgeSize = '40vw';
export const badgeOffset = '20vw';

const useStyles = makeStyles((theme) => ({
  root: {
    left: '50%',
    position: 'absolute',
    zIndex: theme.zIndex.appBar + 1
  },
  badgeHolder: {
    position: 'relative',
    top: `-${badgeOffset}`,
    left: `-${badgeOffset}`
  },
  badge: {
    height: badgeSize,
    width: badgeSize
  }
}));

const RouteBadge = ({ route }) => {
  const style = useStyles();
  const badge = badges[route.zwiftWorld] || Watopia;

  return (
    <div className={style.root}>
      <div className={style.badgeHolder}>
        <img className={style.badge} src={badge} alt={route.zwiftWorld} />
      </div>
    </div>
  );
};

RouteBadge.propTypes = {
  route: PropTypes.shape(ZwiftRoutePropTypes).isRequired
};

export default RouteBadge;
