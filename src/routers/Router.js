import React from "react";
import { Router, Route, Switch } from 'react-router';
import Cart from '../components/Cart';
import App from '../components/App';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

const MyRouter = () => (

  <Router history={history}>

  <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/cart" component={Cart} exact={true} />
    </Switch>

  </Router>
);

export default MyRouter;