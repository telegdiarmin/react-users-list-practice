import React from "react"
import Card from "../UI/Card/Card";
import styles from "./User.module.css"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import userAvatar from "../../assets/images/user-avatar.png"

function User(props) {

function onButtonClickHandler(event){
    // console.log(event.target.id)
    props.onRemoveUser(event.target.id);
}
    return (
        <Card className={styles.user}>
            <div>
                <img src={userAvatar} alt="Dummy avatar image" />
            </div>
            <div className={styles.data}>
                <p className={styles.userName}>{props.name}</p>
                <p className={styles.userAge}>{props.age} years old</p>
            </div>
            <div className={styles.control}>
                <HighlightOffIcon onClick={onButtonClickHandler} id={props.id}/>
            </div>
        </Card>
    )
};

export default User;