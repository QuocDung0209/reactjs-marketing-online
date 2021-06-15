import React from "react";
import Header from "./Header/Header";
import HeaderLinks from "./Header/HeaderLink"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MenuBar = (props) => {
  const { isLoggedIn, username } = props;

  return (
    <div>
      <Header
        brand={isLoggedIn ? `Hi, ${username}` : "Marketing online"}
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
      />
      {/* <SideBar open={open} onChange={onChange} /> */}
    </div>
  );
};

MenuBar.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

const mapStateToProps = ({ auth: { isLoggedIn, username } }) => ({
  isLoggedIn,
  username
});

export default connect(mapStateToProps)(MenuBar);
