import React from 'react';
import List from '@material-ui/core/List';
import ZwiftRouteListItem from './ZwiftRouteListItem';
import { ZwiftRoute, DisplayUnits } from '../../models';

export interface ZwiftRouteListProps {
  /** Event handler called when the user clicks on a route */
  onRouteSelected?: (id: string) => void;

  /** The list of routes to display */
  routes: ZwiftRoute[];

  /** What units are used to display distances and elevation gain? */
  displayUnits?: DisplayUnits;
}

/**
 * Displays the provided list of routes.
 * 
 * @param props The properties for this component
 */
const ZwiftRouteList: React.SFC<ZwiftRouteListProps> = 
  ({ displayUnits = DisplayUnits.Imperial, onRouteSelected, routes }: ZwiftRouteListProps) => {
    /** Event handler called when the user clicks on a route */
    const onClick = (route: ZwiftRoute): void => {
      if (onRouteSelected) onRouteSelected(route.id);
    };

    return (
      <List>
        {routes.map((route) => (
          <ZwiftRouteListItem 
            key={route.id} 
            displayUnits={displayUnits}
            route={route}
            onClick={() => onClick(route)}
          />
        ))}
      </List>
    )
  };

export default ZwiftRouteList;
