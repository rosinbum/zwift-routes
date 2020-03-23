import React from 'react';
import { ZwiftRoute } from 'src/models';

export interface RouteDetailsProps {
  route: ZwiftRoute;
}

const RouteDetails: React.SFC<RouteDetailsProps> = 
  ({ route }) => {
    return (
      <h1>Details: {route.id}</h1>
    );
  };

export default RouteDetails;
