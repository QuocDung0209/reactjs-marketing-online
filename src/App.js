import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "./components/Container";
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import { Provider } from 'react-redux';
import configureStore from './states-management/redux/configureStore';
import GlobalLoading from "./components/Loading/GlobalLoading";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      {/* Routes must be in Router */}
      <Router>
        <CssBaseline />
        <MenuBar />
        <Container />
        <GlobalLoading />
      </Router>
    </Provider>
  );
};

export default App;
