import React from "react";
import NotFound from "./NotFound";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Detail from "./pages/Detail";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Giacomo Guilizzoni",
    position: "Founder & CEO",
    age: 40,
    view: (
      <Link
        to={{
          pathname: "/detail",
          search: `?name=${"Giacomo Guilizzoni"}&age=40`
          //   hash: "#the-hash",
          //   state: { fromDashboard: true }
        }}
        style={{ textDecoration: "none", color: "blue" }}
      >
        View
      </Link>
    ),
    id: 1
  },
  {
    name: "Marco Botton",
    position: "Tuttofare",
    age: 38,
    view: (
      <Link
        to={{
          pathname: "/detail",
          search: `?name=${"Marco Botton"}&age=38`
        }}
        style={{ textDecoration: "none", color: "blue" }}
      >
        View
      </Link>
    ),
    id: 2
  },
  {
    name: "Mariah Maclachlan",
    position: "Better Half",
    age: 41,
    view: (
      <Link
        to={{
          pathname: "/detail",
          search: `?name=${"Mariah Maclachlan"}&age=41`
        }}
        style={{ textDecoration: "none", color: "blue" }}
      >
        View
      </Link>
    ),
    id: 3
  },
  {
    name: "Valerie Liberty",
    position: "Head Chef",
    age: 30,
    view: (
      <Link
        to={{
          pathname: "/detail",
          search: `?name=${"Valerie Liberty"}&age=30`
        }}
        style={{ textDecoration: "none", color: "blue" }}
      >
        View
      </Link>
    ),
    id: 4
  },
  {
    name: "",
    position: "",
    age: "",
    id: 5
  },
  {
    name: "",
    position: "",
    age: "",
    id: 6
  },
  {
    name: "",
    position: "",
    age: "",
    id: 7
  },
  {
    name: "",
    position: "",
    age: "",
    id: 8
  },
  {
    name: "",
    position: "",
    age: "",
    id: 9
  }
];

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    name: "Home",
    path: "?",
    exact: false,
    main: () => <Home />
  },
  {
    name: "Info",
    path: "/info",
    exact: false,
    main: () => <Info />
  },
  {
    name: "Detail",
    path: "/detail",
    exact: false,
    main: () => <Detail />
  },
  {
    name: "Notfound",
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

const menuRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    name: "Info",
    path: "/info",
    exact: true,
    main: () => <Info />
  }
];

export { routes, menuRoutes, data };
