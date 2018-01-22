import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navigation = props => {
  let userState = (
    <Link to="/login" style={{ padding: "1em" }}>
      Login
    </Link>
  );
  if (!!props.id) {
    userState = (
      <Link to={`/users/${props.id}`} style={{ padding: "1em" }}>
        {props.users[props.id].username}
      </Link>
    );
  }

  return (
    <div
      style={{ padding: "1em", display: "grid", gridTemplateRows: "1fr 2fr" }}
    >
      <div style={{ width: "100%" }}>
        <Link to="/" style={{ padding: "1em" }}>
          Home
        </Link>
        {userState}
        <Link to="/lecture_page" style={{ padding: "1em" }}>
          Normalized Data Info Page
        </Link>
      </div>
    </div>
  );
};

export default connect(({ authReducer, usersReducer, dataReducer }) => ({
  ...authReducer,
  ...dataReducer
}))(Navigation);

// export default Navigation;
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
