import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import RouteDetailsPage from './route-details';
import RouteListPage from './route-list';

const MainApplication = () => (
  <Router>
    <Switch>
      <Route path="/route/:id"><RouteDetailsPage /></Route>
      <Route path="/"><RouteListPage /></Route>
    </Switch>
  </Router>
);

export default MainApplication;
