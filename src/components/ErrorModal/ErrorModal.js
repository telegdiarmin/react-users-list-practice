import React from "react";
import Card from "../UI/Card/Card";
import MainButton from "../UI/MainButton/MainButton";
import styles from "./ErrorModal.module.css";

function ErrorModal() {
  return (
    <Card className={styles.modal}>
      <div className={styles.titlebar}>
        <h2>Invalid input</h2>
      </div>
      <div className={styles.content}>
        <p>Some text</p>
        <div className={styles.container}>
          <MainButton title={"Okay"} />
        </div>
      </div>
    </Card>
  );
}

export default ErrorModal;
