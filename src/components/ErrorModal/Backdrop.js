import React from "react"
import ErrorModal from "./ErrorModal";
import styles from "./Backdrop.module.css"

function Backdrop(props) {
    function resetModalHandler(){
        props.onModalReset();
    }

    return(
        <div className={styles.backdrop}>
            <ErrorModal message={props.message} onModalReset={resetModalHandler}/>
        </div>
    )
};

export default Backdrop;