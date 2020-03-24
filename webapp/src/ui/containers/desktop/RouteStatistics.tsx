import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { ZwiftRoute } from 'src/models';
import uniq from 'lodash/uniq';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(2),
    width: '94%'
  },
  table: {
    marginTop: theme.spacing(2)
  }
}));

interface RouteStats {
  completedCount: number;
  totalCount: number;
  completedScore: number;
  totalScore: number;
}

const emptyStats = {
  completedCount: 0,
  totalCount: 0,
  completedScore: 0,
  totalScore: 0
};

const updateStats = (obj: RouteStats, route: ZwiftRoute): void => {
  obj.totalCount += 1;
  obj.totalScore += route.difficulty;
  if (route.isCompleted) {
    obj.completedCount += 1;
    obj.completedScore += route.difficulty;
  }
}

export interface RouteStatisticsProps {
  routes: ZwiftRoute[];
}

const RouteStatistics: React.SFC<RouteStatisticsProps> = 
  ({ routes }: RouteStatisticsProps) => {
    const styles = useStyles();
    const worlds = uniq(routes.map((r) => r.zwiftWorld)).sort();

    const routeStats: Record<string,RouteStats> = {};
    worlds.forEach((world) => {
      routeStats[world] = { ...emptyStats };
    });
    const totals: RouteStats = { ...emptyStats };

    routes.forEach((route) => {
      updateStats(totals, route);
      updateStats(routeStats[route.zwiftWorld], route);
    });

    const completedStats = (stats: RouteStats): string => {
      const percent = (stats.completedCount / stats.totalCount) * 100.0;
      return `${percent.toFixed(1)}%`;
    };

    const scoreStats = (stats: RouteStats): string => {
      return stats.completedScore.toFixed(2);
    };
    
    return (
      <div className={styles.root}>
        <Typography align="center" variant="h5">Route Statistics</Typography>
        <TableContainer component={Paper} className={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Route</TableCell>
                <TableCell align="center">Completed</TableCell>
                <TableCell align="center">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {worlds.map((world) => (
                <TableRow key={world}>
                  <TableCell>{world}</TableCell>
                  <TableCell align="center">{completedStats(routeStats[world])}</TableCell>
                  <TableCell align="center">{scoreStats(routeStats[world])}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell><b>Totals</b></TableCell>
                <TableCell align="center"><b>{completedStats(totals)}</b></TableCell>
                <TableCell align="center"><b>{scoreStats(totals)}</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

export default RouteStatistics;
