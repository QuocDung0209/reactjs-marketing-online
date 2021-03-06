import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { isMobile } from "react-device-detect";
import AuthRoute from "./PrivateRoute/AuthRoute";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    height: "100%",
    position: "fixed",
    overflow: "auto",
  },

  paperMobile: {
    width: "100%",
    height: "100%",
    position: "fixed",
    overflow: "scroll",
  }
});

const Container = () => {
  const classes = useStyles();

  var result = null;

  if (routes.length > 0) {
    result = routes.map(route => (
      route.isPrivate
        ? <AuthRoute
          exact={route.exact}
          path={route.path}
          component={route.main}
          key={route.name} />
        : <Route
          exact={route.exact}
          path={route.path}
          component={route.main}
          key={route.name}
        />
    ));
  }

  return (
    <Paper className={isMobile ? classes.paperMobile : classes.paper} square>
      {/** Components will be render at place which put Routes in with already defined path */}
      <Switch>{result}</Switch>
    </Paper>
  );
};

export default Container;
