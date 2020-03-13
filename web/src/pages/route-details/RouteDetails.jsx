import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { ZwiftRoutePropTypes } from '../../app-state/models/ZwiftRoute';
import { badgeOffset } from './RouteBadge';
import { formatDistance, formatElevationGain } from '../formatters';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    marginTop: badgeOffset
  },
  table: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  }
}));

const RouteDetails = ({ displayUnits, route }) => {
  const style = useStyles();

  const leadinDistance = formatDistance(route.leadinDistance, displayUnits);
  const routeDistance = formatDistance(route.routeDistance, displayUnits);
  const totalDistance = formatDistance(route.totalDistance, displayUnits);
  const leadinElevationGain = formatElevationGain(route.leadinElevationGain, displayUnits);
  const routeElevationGain = formatElevationGain(route.routeElevationGain, displayUnits);
  const totalElevationGain = formatElevationGain(route.totalElevationGain, displayUnits);

  return (
    <div className={style.root}>
      <TableContainer container={Paper}>
        <Table className={style.table}>
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
              <TableCell colSpan="2" align="center">
                {`${route.difficulty.toFixed(2)}`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

RouteDetails.propTypes = {
  displayUnits: PropTypes.oneOf(['imperial', 'metric']),
  route: PropTypes.shape(ZwiftRoutePropTypes).isRequired
};

RouteDetails.defaultProps = {
  displayUnits: 'metric'
};

export default RouteDetails;
