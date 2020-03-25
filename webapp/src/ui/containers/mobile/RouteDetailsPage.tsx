import React from 'react';
import { useParams } from 'react-router-dom';

const RouteDetailsPage: React.SFC<{}> = () => {
  const { id } = useParams();

  return (<h1>Details Page: {id}</h1>);
};

export default RouteDetailsPage;
