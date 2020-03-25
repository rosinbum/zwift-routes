import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import CompletedIcon from './CompletedIcon';
import { DisplayUnits, ZwiftRoute } from 'src/models';
import { formatDistance, formatElevationGain } from 'src/utils';

export interface ZwiftRouteListItemProps {
  /** What display units for distance and elevation gain */
  displayUnits: DisplayUnits;

  /** Click handler */
  onClick?: () => void;

  /** The route to display */
  route: ZwiftRoute;
}

/**
 * Displays a single row in the route-list.  See ZwiftRouteList.tsx
 * 
 * @param props the component properties - see ZwiftRouteListItemProps
 */
const ZwiftRouteListItem: React.SFC<ZwiftRouteListItemProps> = 
  ({ displayUnits, onClick, route }: ZwiftRouteListItemProps) => {
    /** Handler for the click event */
    const handleClick = (): void => { if (onClick) onClick(); };

    /** What text should we display under the title */
    const distance = formatDistance(route.routeDistance, displayUnits);
    const elevation = formatElevationGain(route.routeElevationGain, displayUnits);
    const difficulty = route.difficulty.toFixed(2);
    const secondaryText = `${distance}, ${elevation}, difficulty ${difficulty}`;

    return (
      <ListItem button divider data-testid={route.id} onClick={handleClick}>
        <ListItemAvatar>
          <CompletedIcon isCompleted={route.isCompleted} />
        </ListItemAvatar>
        <ListItemText secondary={secondaryText}>
          <Typography variant="h6">{route.routeName}</Typography>
        </ListItemText>
      </ListItem>
    );
  };

export default ZwiftRouteListItem;
