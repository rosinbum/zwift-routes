import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { DisplayUnits, ZwiftRoute } from 'src/models';
import { formatDistance, formatElevationGain } from 'src/utils';

export interface ZwiftRouteTableProps {
  /** What units to display measurements in */
  displayUnits: DisplayUnits;

  /** The route information to display */
  route: ZwiftRoute;
}

/* Stylesheet */
const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  }
}));

const ZwiftRouteTable: React.SFC<ZwiftRouteTableProps> = 
  ({ displayUnits, route }: ZwiftRouteTableProps) => {

    const styles = useStyles();
    const leadinDistance = formatDistance(route.leadinDistance, displayUnits);
    const routeDistance = formatDistance(route.routeDistance, displayUnits);
    const totalDistance = formatDistance(route.totalDistance, displayUnits);
    const leadinElevationGain = formatElevationGain(route.leadinElevationGain, displayUnits);
    const routeElevationGain = formatElevationGain(route.routeElevationGain, displayUnits);
    const totalElevationGain = formatElevationGain(route.totalElevationGain, displayUnits);

    return (
      <TableContainer component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>&nbsp;</TableCell>
              <TableCell align="center">Distance</TableCell>
              <TableCell align="center">Elevation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Lead in</TableCell>
              <TableCell align="center">{leadinDistance}</TableCell>
              <TableCell align="center">{leadinElevationGain}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Route</TableCell>
              <TableCell align="center">{routeDistance}</TableCell>
              <TableCell align="center">{routeElevationGain}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell align="center">{totalDistance}</TableCell>
              <TableCell align="center">{totalElevationGain}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Difficulty</TableCell>
              <TableCell colSpan={2} align="center">
                {`${route.difficulty.toFixed(2)}`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

export default ZwiftRouteTable;
