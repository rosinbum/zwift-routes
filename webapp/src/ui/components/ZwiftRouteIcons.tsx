import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/EmojiEventsOutlined';
import BikeIcon from '@material-ui/icons/DirectionsBikeOutlined';
import RunIcon from '@material-ui/icons/DirectionsRunOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { ZwiftRoute } from 'src/models';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    iconContainer: {
      display: 'block',
      padding: theme.spacing(0.5)
    },
    icon: {
      color: 'inherit',
      display: 'inline',
      marginRight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5)
    },
    text: {
      color: 'inherit',
      display: 'inline',
      fontSize: '1.5rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      marginRight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5),
      verticalAlign: 'top'
    }
  })
);

export interface ZwiftRouteIconsProps {
  fontSize?: string;
  /** The route to display */
  route: ZwiftRoute;
}

const ZwiftRouteIcons: React.SFC<ZwiftRouteIconsProps> = 
  ({ fontSize = "1.5rem", route }: ZwiftRouteIconsProps) => {
    const styles = useStyles();

    const eventOnlyIcon = (
      <Tooltip title="Event only" aria-label="Event only">
        <div className={styles.icon}>
          <EventIcon data-testid="event-icon" color="inherit" />
        </div>
      </Tooltip>
    );

    const cyclingIcon = (
      <Tooltip title="Cycling" aria-label="Cycling">
        <div className={styles.icon}>
          <BikeIcon data-testid="cycling-icon" color="inherit" />
        </div>
      </Tooltip>
    );

    const runningIcon = (
      <Tooltip title="Running" aria-label="Running">
        <div className={styles.icon}>
          <RunIcon data-testid="running-icon" color="inherit" />
        </div>
      </Tooltip>
    );

    const levelIcon = (
      <Tooltip title="Minimum Zwift Level" aria-label="Minimum Zwift Level">
        <div data-testid="level-icon" className={styles.text}>
          {route.minimumZwiftLevel}+
        </div>
      </Tooltip>
    );

    return (
      <div className={styles.iconContainer} style={{ fontSize: fontSize }}>
        {route.isEventOnly && eventOnlyIcon}
        {route.isForCycling && cyclingIcon}
        {route.isForRunning && runningIcon}
        {route.minimumZwiftLevel > 0 && levelIcon}
      </div>
    );
  };

export default ZwiftRouteIcons;
