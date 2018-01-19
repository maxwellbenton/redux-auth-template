import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  console.log(props);
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
    <div style={{ padding: "1em" }}>
      <Link to="/" style={{ padding: "1em" }}>
        Home
      </Link>
      {userState}
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
