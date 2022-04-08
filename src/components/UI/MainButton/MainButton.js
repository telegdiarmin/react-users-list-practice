import React from "react";
import styles from "./MainButton.module.css"

function MainButton(props){
    return (
        <button className={styles.button}>{props.title}</button>
    )
}

export default MainButton;