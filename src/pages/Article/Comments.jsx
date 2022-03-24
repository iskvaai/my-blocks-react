import React from 'react';
import styles from "./Comments.module.css"
import { comments } from "../../constant";


const Comments = () => {
    return (
        <div className={styles.comments}>
            <h4>Комментарии</h4>
            <div className={styles.container}>
                <img src="https://sevelina.ru/images/uploads/2014/02/287.png" alt="" />
                <input className={styles.container1} type="text" placeholder='Введите имя'/>
                <input type="text" placeholder='Введите текст комментария'/>
                <button>Оставить комментарий</button>
            </div><br /> <br />
            <h5>122 комментариев {
                comments.map((item) => {
                    return <>
                        <div key={item.id} className={styles.container}>
                            <img src={item.img} alt="" />
                            <p>{item.name}</p> <br />
                        </div>
                        <p>{item.comment}</p>
                        <h6>Ответить</h6>
                    </>
                })
            }
            </h5>
        </div>
    );
};
export default Comments;