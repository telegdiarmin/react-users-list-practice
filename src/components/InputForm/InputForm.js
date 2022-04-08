import React from "react";
import Card from "../UI/Card/Card";
import MainButton from "../UI/MainButton/MainButton";
import styles from "./InputForm.module.css";

function InputForm() {
  return (
    <Card className={styles.inputForm}>
      <form>
        <label id="userName">Username</label>
        <input type="text" name="userName" />
        <label id="userAge">Age (Years)</label>
        <input type="number" name="userAge" id="userAge" />
        <MainButton title={"Add User"}/>
      </form>
    </Card>
  );
}

export default InputForm;
