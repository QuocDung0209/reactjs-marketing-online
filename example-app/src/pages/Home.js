import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Map from "../container/GoogleMap";
import Grid from "@material-ui/core/Grid";
import InfoTable from "../components/InfoTable";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },

  welcome: {
    height: 120,
    backgroundColor: "white",
    margin: "auto"
  },

  gridItem: {
    height: 550,
    backgroundColor: "white",
    marginTop: 40,
    margin: "auto"
  }
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const classes = useStyles();

  let query = useQuery();
  let name = query.get("name");
  let age = query.get("age");

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={11} xs={11} className={classes.welcome}>
          <h1>Welcome{name && age ? `: ${name} (${age})` : ""}</h1>
          <div>
            <NavLink to="/info">Input infomation</NavLink>
          </div>
        </Grid>
        <Grid item lg={5} xs={11} className={classes.gridItem}>
          <Map />
        </Grid>
        <Grid item lg={5} xs={11} className={classes.gridItem}>
          <InfoTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;