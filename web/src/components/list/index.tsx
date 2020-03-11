import React from 'react';
import ZwiftRoute from 'models/ZwiftRoute';

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
  return (
    <div className="listView">
      <pre>{JSON.stringify(props.routes, null, 2)}</pre>
    </div>
  );
};

export default ListRoutesView;
