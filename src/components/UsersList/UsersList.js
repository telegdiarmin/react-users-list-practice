import React from "react";
import User from "./User";

function UsersList(props) {
  function removeUserHandler (userId){
      props.onRemoveUser(userId);
  }
    
  return (
    <div>
      {props.users.map((user) => (
        <User
          name={user.name}
          age={user.age}
          key={user.id}
          id={user.id}
          onRemoveUser={removeUserHandler}
        />
      ))}
    </div>
  );
}

export default UsersList;
