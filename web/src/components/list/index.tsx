import React from 'react';
import ZwiftRoute from 'models/ZwiftRoute';

interface ListViewProps {
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
const ListView: React.SFC<ListViewProps> = (props) => {
  return (
    <div className="listView">
      <p>{JSON.stringify(props.routes, null, 2)}</p>
    </div>
  );
};

export default ListView;
