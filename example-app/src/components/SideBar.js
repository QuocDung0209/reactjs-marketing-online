import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { menuRoutes } from "../routes.js";
import { isMobile } from "react-device-detect";
import Header from "./Header";

const useStyles = makeStyles({
  drawerPaper: {
    width: 200,
    zIndex: -1,
    paddingTop: 60
  },

  item: {
    borderBottom: "solid 1px black"
  },

  menuLink: {
    textDecoration: "none",
    color: "black"
  }
});

const TemporaryDrawer = props => {
  const [state, setState] = useState(isMobile ? true : false);
  const handleChange = value => {
    setState(value);
  };

  const classes = useStyles();

  const renderList = menuRoutes => {
    return (
      <List>
        {menuRoutes.map(item => (
          <NavLink
            exact={item.exact}
            to={item.path}
            className={classes.menuLink}
            activeStyle={{
              backgroundColor: "#04d10e",
              float: "left",
              width: 200,
              color: "white"
            }}
            key={item.name}
          >
            <ListItem className={classes.item} button key={item.name}>
              <ListItemText primary={item.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    );
  };

  // console.log(`sideBar: ${JSON.stringify(props)}`);

  return (
    <div>
      <Header onChange={handleChange} test={"test"} />
      <div className={{ width: 200 }}>
        <Drawer
          open={state}
          onClose={() => handleChange(false)}
          variant={isMobile ? "temporary" : "permanent"}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {renderList(menuRoutes)}
        </Drawer>
      </div>
    </div>
  );
};

export default TemporaryDrawer;
