import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../css/Home.css";
import Map from "../container/GoogleMap";
import { data } from "../routes";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  

  let query = useQuery();
  let name = query.get("name");
  let age = query.get("age");

  return (
    <div className="container">
      <h1>Welcome{name && age ? `: ${name} (${age})` : ""}</h1>
      <div>
        <NavLink to="/info">Input infomation</NavLink>
      </div>
      <div className="map">
        <Map />
      </div>
      <div className="tableDiv">
        <table className="table" cellSpacing="0" border="1">
          <thead className="thead">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data.map(item => (
              <tr className="tr" key={item.id}>
                <td>
                  {item.name} <br /> {item.position}
                </td>
                <td>{item.age}</td>
                <td>{item.view}</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}

export default Home;
