import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/EmojiEventsOutlined';
import BikeIcon from '@material-ui/icons/DirectionsBikeOutlined';
import RunIcon from '@material-ui/icons/DirectionsRunOutlined';
import { ZwiftRoute } from 'src/models';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    iconContainer: {
      display: 'block',
      padding: theme.spacing(0.5)
    },
    icon: {
      color: theme.palette.primary.contrastText,
      display: 'inline',
      marginRight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5)
    }
  })
);

export interface ZwiftRouteIconsProps {
  /** The route to display */
  route: ZwiftRoute;
}

const ZwiftRouteIcons: React.SFC<ZwiftRouteIconsProps> = 
  ({ route }: ZwiftRouteIconsProps) => {
    const styles = useStyles();

    const eventOnlyIcon = (
      <div className={styles.icon}>
        <EventIcon data-testid="event-icon" color="inherit" />
      </div>
    );

    const cyclingIcon = (
      <div className={styles.icon}>
        <BikeIcon data-testid="cycling-icon" color="inherit" />
      </div>
    );

    const runningIcon = (
      <div className={styles.icon}>
        <RunIcon data-testid="running-icon" color="inherit" />
      </div>
    );

    return (
      <div className={styles.iconContainer}>
        {route.isEventOnly && eventOnlyIcon}
        {route.isForCycling && cyclingIcon}
        {route.isForRunning && runningIcon}
      </div>
    );
  };

export default ZwiftRouteIcons;
