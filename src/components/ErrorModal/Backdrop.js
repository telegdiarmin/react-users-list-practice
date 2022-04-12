import React from "react"
import ErrorModal from "./ErrorModal";
import styles from "./Backdrop.module.css"

function Backdrop() {
    return(
        <div className={styles.backdrop}>
            <ErrorModal/>
        </div>
    )
};

export default Backdrop;