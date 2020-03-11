import React from 'react';
import ZwiftRoute from 'models/ZwiftRoute';
import RouteUpdates from 'models/RouteUpdates';

interface DetailsViewProps {
  /**
   * The route to display the details.
   */
  route:          ZwiftRoute,

  /**
   * Event handler called when the user indicates an update to the route
   */
  onRouteUpdated: (routeUpdates: RouteUpdates) => void
};

/**
 * Pure component to display the details of a route.
 * 
 * @param props component properties
 */
const DetailsView: React.SFC<DetailsViewProps> = (props) => {
  return (
    <div className="detailsView">
      <p>{JSON.stringify(props.route, null, 2)}</p>
    </div>
  );
};

export default DetailsView;
