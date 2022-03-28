import React, {useState} from "react";
import styles from "./UserCard/UseCard.module.css"

const Test = () => {
    const [number, setNumber] = useState(0);
    const [data, setData] = useState([]);


    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }
    const getData = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }


    return (
        <div className="containerCard">
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={getData}>Запрос данных</button>
            <h1>{number}</h1>
            {
                data.map((item) => {
                    return (
                        <div className={styles.useCard}>
                            <p  className={styles.CardName} > {item.name} </p>
                            <p>{item.email} </p>
                            <p>{item.phone} </p>
                            <p>{item.website} </p>
                            <p>{item.companyName} </p>
                            <button>FOLLOW</button>
                        </div>

                    )
                })
            }
        </div>

    )
}
export default Test;