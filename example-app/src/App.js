import React from "react";
// import Header from "./components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
// import SideBar from "./components/SideBar";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./components/MenuBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <CssBaseline />
          {/* <Header /> */}
          {/* <SideBar /> */}
          <MenuBar />
          <MainPage />
        </Router>
      </div>
    );
  }
}

export default App;
