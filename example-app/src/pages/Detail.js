import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Detail(props) {
  let query = useQuery();
  return (
    <div>
      <h1>Detail</h1>
      <p>
        Name: {query.get("name")} <br /> Age: {query.get("age")}
      </p>
      <div>
        <NavLink exact to="/">
          Back to home
        </NavLink>
      </div>
    </div>
  );
}

export default Detail;
