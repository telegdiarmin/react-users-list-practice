import React from "react";
import Card from "../UI/Card/Card";
import MainButton from "../UI/MainButton/MainButton";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  function resetModalHandler(){
    props.onModalReset();
    console.log("Clicked!")
  }

  return (
    <Card className={styles.modal}>
      <div className={styles.titlebar}>
        <h2>Invalid input</h2>
      </div>
      <div className={styles.content}>
        <p>{props.message}</p>
        <div className={styles.container} >
          <MainButton title={"Okay"} onClick={resetModalHandler}/>
        </div>
      </div>
    </Card>
  );
}

export default ErrorModal;
