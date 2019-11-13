import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import Test from '../components/Test';
import App from '../components/App';
import createHistory from 'history/createBrowserHistory';




export const history = createHistory();

const MyRouter = () => (

  <Router history={history}>

    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/test" component={Test} exact={true} />
    </Switch>

  </Router>
);

export default MyRouter;