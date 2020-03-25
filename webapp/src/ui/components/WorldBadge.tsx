import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import CritCityBadge from 'src/assets/badges/CritCity.png';
import LondonBadge   from 'src/assets/badges/London.png';
import NewYorkBadge  from 'src/assets/badges/NewYork.png';
import WatopiaBadge  from 'src/assets/badges/Watopia.png';
import DefaultBadge  from 'src/assets/badges/Default.png';

const badges: Record<string,any> = {
  'Crit City': CritCityBadge,
  'London':    LondonBadge,
  'New York':  NewYorkBadge,
  'Watopia':   WatopiaBadge
};

export interface WorldBadgeProps {
  world: string;
}

/* stylesheet */
const useStyles = makeStyles(
  createStyles({
    badge: {
      height:     '30vw',
      maxHeight:  '12rem',
      maxWidth:   '12rem',
      width:      '30vw'
    }
  })
);

const WorldBadge: React.SFC<WorldBadgeProps> = ({ world }: WorldBadgeProps) => {
  const styles = useStyles();
  const badge = world in badges ? badges[world] : DefaultBadge;

  return (
    <div className={styles.badge}>
      <img className={styles.badge} src={badge} alt={world} />
    </div>
  );
};

export default WorldBadge;
