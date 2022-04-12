import React from "react";
import styles from "./App.module.css";
import InputForm from "./components/InputForm/InputForm";
import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";
import Backdrop from "./components/ErrorModal/Backdrop";

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

  const [isValid, setIsValid] = useState({
    valid: true,
    message: "",
  });

  const [users, setUsers] = useState(DUMMY_USERS);

  function validateUserHandler(user) {
    if (user.name.trim() == "" || user.age.trim() == "") {
      setIsValid({
        valid: false,
        message: "Please enter a valid name and age (non-empty values).",
      });
    } else if (user.age < 0) {
      setIsValid({
        valid: false,
        message: "Please enter a valid age (>0).",
      });
    } else {
      addUserHandler(user);
    }
  }

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  }

  function removeUserHandler(userId) {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  }

  function resetModalHandler() {
    setIsValid({
      valid: true,
      message: "",
    });
  }

  return (
    <div className={styles.app}>
      {!isValid.valid && (
        <Backdrop message={isValid.message} onModalReset={resetModalHandler} />
      )}
      <InputForm onSubmitForm={validateUserHandler} />
      <UsersList users={users} onRemoveUser={removeUserHandler} />
    </div>
  );
}

export default App;
