import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "../css/Header.css";
import { isMobile } from "react-device-detect";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { menuRoutes } from "../routes.js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolBar: {
    backgroundColor: "#F1F1F1"
  },
  youtubeButton: {
    color: "red"
  },
  drawerPaper: {
    width: 200,
    zIndex: -1,
    paddingTop: 60
  },

  drawerPaperMobile: {
    width: 200,
    zIndex: -1,
    paddingTop: 50
  },

  item: {
    borderTop: "solid 1px black",
    borderBottom: "solid 1px black"
  },

  menuLink: {
    textDecoration: "none",
    color: "black"
  }
}));

function ButtonAppBar(props) {
  const [open, setOpen] = useState(isMobile ? false : true);
  const classes = useStyles();

  const handleButtonClick = value => {
    setOpen(value);
  };

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

  return (
    <div>
      <div className="header">
        <AppBar>
          <Toolbar className={classes.toolBar}>
            {!isMobile ? (
              ""
            ) : (
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="menu"
                onClick={() => handleButtonClick(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <IconButton
              edge="start"
              className={classes.youtubeButton}
              aria-label="youtube"
            >
              <YouTubeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <div className={{ width: 200 }}>
        <Drawer
          open={open}
          onClose={() => handleButtonClick(false)}
          variant={isMobile ? "temporary" : "permanent"}
          classes={
            isMobile
              ? {
                  paper: classes.drawerPaperMobile
                }
              : {
                  paper: classes.drawerPaper
                }
          }
        >
          {renderList(menuRoutes)}
        </Drawer>
      </div>
    </div>
  );
}

export default ButtonAppBar;
