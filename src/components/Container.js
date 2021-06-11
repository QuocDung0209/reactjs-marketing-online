import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles({
  paper: {
    // width: "calc(100% - 200px)",
    width: "100%",
    height: "100%",
    position: "fixed",
    // left: 200,
    paddingTop: 80,
    overflow: "auto",
  },

  paperMobile: {
    width: "100%",
    height: "100%",
    position: "fixed",
    paddingTop: 72,
    overflow: "scroll",
  }
});

const Container = () => {
  const classes = useStyles();

  var result = null;

  if (routes.length > 0) {
    result = routes.map(route => (
      <Route
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
