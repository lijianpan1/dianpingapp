import React from "react";
import createHistory from "history/createHashHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../container/Home";
import City from "../container/City";
import Detail from "../container/Detail";
import Search from "../container/Search";
import User from "../container/User";
import Login from "../container/Login";
import NotFound from "../container/404";

export default class RouterMap extends React.Component {
  render() {
    const history = createHistory();
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/city" component={City} />
            <Route path="/detail/:shopId" component={Detail} />
            <Route path="/search/:type/:keyword?" component={Search} />
            <Route path="/user" component={User} />
            <Route path="/login/:router?" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}
