import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as UI from 'src/ui/components'; 

import { DisplayUnits, ZwiftRoute } from 'src/models';
import ZwiftInsiderLink from 'src/ui/components/ZwiftInsiderLink';

const useStyles = makeStyles((theme: Theme) => createStyles({
  lower: {
    display: 'block'
  },
  upper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  badge: {
    display: 'block',
    padding: theme.spacing(2)
  },
  info: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: theme.spacing(2)
  },
  links: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row nowrap'
  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4)
  },
  zwiftInsiderLink: {
    flexGrow: 1
  },
  completedLink: {
    flexGrow: 1
  }
}));

export interface RouteDetailsProps {
  displayUnits?: DisplayUnits;
  onCompletedChanged?: (isCompleted: boolean) => void;
  route: ZwiftRoute;
}

const RouteDetails: React.SFC<RouteDetailsProps> = 
  ({ displayUnits = DisplayUnits.Metric, onCompletedChanged, route }: RouteDetailsProps) => {
    const styles = useStyles();

    const onCompleted = (): void => {
      if (onCompletedChanged) onCompletedChanged(!route.isCompleted);
    }

    return (
      <div className={styles.paper}>
        <Paper>
          <div className={styles.upper}>
            <div className={styles.badge}>
              <UI.WorldBadge world={route.zwiftWorld} />
            </div>
            <div className={styles.info}>
              <Typography variant="h4">{route.routeName}</Typography>
              <UI.ZwiftRouteIcons route={route} />
              <div className={styles.links}>
                <div className={styles.zwiftInsiderLink}>
                  <ZwiftInsiderLink route={route} />
                </div>
                <div className={styles.completedLink}>
                  <IconButton data-testid="completed-button" onClick={onCompleted}>
                    <UI.CompletedIcon isCompleted={route.isCompleted} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lower}>
            <UI.ZwiftRouteTable displayUnits={displayUnits} route={route} />
          </div>
        </Paper>
      </div>
    );
  };

export default RouteDetails;
