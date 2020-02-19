import React from "react";
import "../css/MainPage.css";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { isMobile } from "react-device-detect";

export default function MainPage() {
  var result = null;

  if (routes.length > 0) {
    result = routes.map(route => (
      <Route exact={route.exact} path={route.path} component={route.main} key={route.name} />
    ));
  }

  return (
    <div className={isMobile ? "content-mobile" : "content"}>
      <Switch>{result}</Switch>
    </div>
  );
}
