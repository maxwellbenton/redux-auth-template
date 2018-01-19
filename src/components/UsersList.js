import React from "react";
import UserCard from "./UserCard";

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    document.addEventListener("scroll", () => {
      if (
        this.userListComponent.scrollHeight -
          document.documentElement.scrollTop <
        1200
      ) {
        this.getUsers();
      }
    });
  }

  usersList = () =>
    this.props.users.map(user => <UserCard key={user.id} {...user} />);

  render() {
    console.log(this.props);
    return (
      <div
        ref={div => (this.userListComponent = div)}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
      >
        {this.usersList()}
      </div>
    );
  }
}

export default UserList;
