import React from "react"; // Must import React if you use JSX
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Detail from "./pages/Detail";
import Login from './pages/Login';

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    type: 'menu',
    main: (match) => <Home match={match} /> // match is used to get params on URL
  },
  {
    name: "Home",
    path: "?",
    exact: false,
    main: ({ match, location }) => <Home match={match} location={location} /> // location is used to get information of previous page when use Redirect of react-router-dom
  },
  {
    name: "Info",
    path: "/info",
    exact: false,
    type: 'menu',
    main: () => <Info />
  },
  {
    name: "Detail",
    path: "/detail",
    exact: false,
    main: () => <Detail />
  },
  {
    name: 'Sign In',
    path: '/login',
    exact: false,
    main: () => <Login />
  },
  {
    name: "Notfound",
    exact: false,
    main: () => <NotFound />
  }
];

export { routes };
