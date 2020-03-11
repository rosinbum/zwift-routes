import React from 'react';
import List from '@material-ui/core/List';
import ZwiftRoute from 'models/ZwiftRoute';
import RouteListItem from './RouteListItem';

export interface ListRoutesProps {
  /**
   * The list of routes to display.
   */
  routes: [ZwiftRoute],

  /**
   * Event handler called when the user clicks on a single row
   */
  onSelectRoute: (route: ZwiftRoute) => void
}

/**
 * Pure component to display the list of routes.
 * @param props component properties
 */
const ListRoutesView: React.SFC<ListRoutesProps> = (props) => {
  /**
   * Event handler to process a click on the row.
   * 
   * @param route the route that was clicked
   */
  const onClick = (route: ZwiftRoute) => () => {
    props.onSelectRoute(route);
  };

  return (
    <List>
      {props.routes.map((r) => (
        <RouteListItem key={r.id} onClick={onClick(r)} route={r} />
        ))}
    </List>
  );
};

export default ListRoutesView;
