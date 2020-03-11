import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import DetailedPageView from './details';
import ListPageView from './list';
 
/**
 * The main application component, which is needed to set up the routing
 * context for the application.
 */
const MainApplication: React.SFC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/route/:id">
        <DetailedPageView />
      </Route>
      <Route path="/">
        <ListPageView />
      </Route>
    </Switch>
  </Router>

);

export default MainApplication;
