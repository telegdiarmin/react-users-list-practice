import React from "react";
import User from "./User";
import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <div>
      {props.users.map((user) => (
        <User name={user.name} age={user.age} key={user.id} />
      ))}
    </div>
  );
}

export default UsersList;
