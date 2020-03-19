import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "./components/Container";
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./components/MenuBar";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <MenuBar />
        <Container />
      </Router>
    </React.Fragment>
  );
};

export default App;
