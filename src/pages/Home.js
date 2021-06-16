import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Map from "../container/GoogleMap";
import Grid from "@material-ui/core/Grid";
import InfoTable from "../components/InfoTable";
import CustomButton from '../components/CustomButtons/Button';
import Banner from '../components/Banners/Banner';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop: '72px'
  },

  welcome: {
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

function Home({ match }) {
  const classes = useStyles();
  const { name, age } = (match && match.location && match.location.state) ?? { name: '', age: '' };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={12} xs={12} className={classes.welcome}>
          <Banner />
          {/* <h1>Welcome{name && age ? `: ${name} (${age})` : ""}</h1>
          <div>
            <NavLink to="/info">Input infomation</NavLink>
          </div>
          <CustomButton color="google" outline={true} >Tetsss</CustomButton> */}
        </Grid>
        {/* <Grid item lg={5} xs={11} className={classes.gridItem}>
          <Map />
        </Grid>
        <Grid item lg={5} xs={11} className={classes.gridItem}>
          <InfoTable />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Home;
