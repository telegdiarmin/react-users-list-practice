import React from "react";
import User from "./User";
import styles from "./UsersList.module.css"

function UsersList(props) {
  function removeUserHandler (userId){
      props.onRemoveUser(userId);
  }
    
  return (
    <ul className={styles.usersList}>
      {props.users.map(user => (
        <User
          name={user.name}
          age={user.age}
          key={user.id}
          id={user.id}
          onRemoveUser={removeUserHandler}
        />
      ))}
    </ul>
  );
}

export default UsersList;
