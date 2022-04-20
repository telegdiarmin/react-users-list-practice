import React, { useState } from "react";
import Card from "../UI/Card/Card";
import MainButton from "../UI/MainButton/MainButton";
import styles from "./InputForm.module.css";

function InputForm(props) {
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAge: "",
  });

  function nameChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
  }

  function ageChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredAge: event.target.value };
    });
  }

  function submitFormHandler(event) {
    event.preventDefault();
    const userData = {
      name: userInput.enteredName,
      age: userInput.enteredAge,
      id: Math.random().toString(),
    };
    props.onSubmitForm(userData);
    setUserInput({
      enteredName: "",
      enteredAge: "",
    })
  }

  return (
    <Card className={styles.inputForm}>
      <form onSubmit={submitFormHandler}>
        <label>
          Username
          <input
            type="text"
            id="userName"
            name="userName"
            value={userInput.enteredName}
            onChange={nameChangeHandler}
          />
        </label>
        <label>
          Age (Years)
          <input
            type="number"
            id="userAge"
            name="userAge"
            value={userInput.enteredAge}
            onChange={ageChangeHandler}
          />
        </label>
        <MainButton title={"Add User"} />
      </form>
    </Card>
  );
}

export default InputForm;
