import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  let userState = (
    <Link to="/login" style={{ padding: "1em" }}>
      Login
    </Link>
  );
  if (!!props.id) {
    userState = (
      <Link to={`/users/${props.id}`} style={{ padding: "1em" }}>
        {props.username}
      </Link>
    );
  }

  return (
    <div
      style={{ padding: "1em", display: "grid", gridTemplateRows: "1fr 2fr" }}
    >
      <div>
        <Link to="/" style={{ padding: "1em" }}>
          Home
        </Link>
        {userState}
        <Link to="/lecture_page">
          <div style={{ padding: "1em" }}>Normalized Data Info Page</div>
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "2fr 1fr",
          gridTemplateColumns: "auto",
          textAlign: "center"
        }}
      >
        <div style={{ fontSize: "500%" }}>Human Blog Site</div>
        <div style={{ fontSize: "150%", margin: "5px" }}>
          Welcome, Fellow Human
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",

            fontSize: "125%",
            margin: "10px"
          }}
        >
          <Link to="/">
            <div
              style={{ textAlign: "center", width: "125px", margin: "auto" }}
            >
              Human Posts
            </div>
          </Link>
          <Link to="/users">
            <div
              style={{ textAlign: "center", width: "125px", margin: "auto" }}
            >
              Human List
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
// <li>
//   {!!props.id ? (
//     <a
//       onClick={e => {
//         e.preventDefault();
//         props.logoutUser();
//       }}
//     >
//       Sign Out
//     </a>
//   ) : (
//
//
//   )}
// </li>
