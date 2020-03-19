import React from "react";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Detail from "./pages/Detail";

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    type: 'menu',
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
    name: "Notfound",
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export { routes };
