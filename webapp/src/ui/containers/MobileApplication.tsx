import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
  SettingsPage, 
  RouteDetailsPage,
  RouteStatsPage, 
  RouteListPage 
} from './mobile';

const MobileApplication: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/details/:id">
        <RouteDetailsPage />
      </Route>
      <Route path="/stats">
        <RouteStatsPage />
      </Route>
      <Route path="/">
        <RouteListPage />
      </Route>
    </Switch>
  );
};

export default MobileApplication;
