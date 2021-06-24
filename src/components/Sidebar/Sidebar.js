/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components

import styles from "../../assets/jss/components/sidebarStyle";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  const { color, image, routes } = props;

  const links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={classes.item}
            activeClassName={classes.navLinkActive}
            key={key}
          >
            <ListItem button className={classes.itemLink}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon)}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon)}
                />
              )}
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText)}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        open
      >
        <div className={classes.sidebarWrapper}>{links}</div>
        {image !== undefined ? (
          <div
            className={classes.background}
            style={{ backgroundImage: "url(" + image + ")" }}
          />
        ) : null}
      </Drawer>
    </>
  );
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};
