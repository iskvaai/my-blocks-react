import React from "react";
import styles from "./UseCard.module.css"

const UserCard = (props) => {

    return (
        <div >
            <p >{props.name}</p>
            <p >{props.email}</p>
            <p >{props.phone}</p>
            <p >{props.website}</p>
            <p >{props.companyName}</p>
            <button  className={styles.btnCard}>{props.btnCard}</button>

        </div>
    )
}
export default UserCard;