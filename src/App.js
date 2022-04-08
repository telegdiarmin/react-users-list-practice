import React from "react";
import styles from "./App.module.css";
import InputForm from "./components/InputForm/InputForm";
import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";

function App() {
  const DUMMY_USERS = [
    {
      name: "Telegdi Ármin",
      age: 29,
      id: 1,
    },
    {
      name: "Latabár Kálmán",
      age: 31,
      id: 2,
    },
    {
      name: "Jávor Pál",
      age: 45,
      id: 3,
    },
  ];

  const [users, setUsers] = useState(DUMMY_USERS);

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  }

  function removeUserHandler(user) {}

  return (
    <div className={styles.app}>
      <InputForm />
      <UsersList
        users={users}
        onAddUser={addUserHandler}
        onRemoveUser={removeUserHandler}
      />
    </div>
  );
}

export default App;
