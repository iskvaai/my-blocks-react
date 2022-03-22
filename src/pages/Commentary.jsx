import React from 'react';
import "./Article.css";
import "./Commentary.css"
import {commentary} from "../constant";


const Commentary = () => {
    return (
        <>
            <div className="inputBlock">
                <img className="" style={{width: "30px"}}
                     src="https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-99657466.jpg"
                     alt=""/>
                <input type="nameInput" placeholder="Введите своё имя"/>
                <input className="commInput" type="text" placeholder="Оставьте свой комментарий"
                       style={{width: "300px"}}/>
                <button className="btn">Отправить</button>
            </div><br/>
            <div className="commBlock">
                <h4>2 комментариев: {
                    commentary.map((item) => {
                        return <>
                            <div key={item.id}>

                                <p className="name">{item.name}: </p>
                            </div>
                            <p id="comm">Ваш комментарий:</p>
                            <p className="comment" >{item.comment}</p>
                            <p className="toAnswer">Ответить</p>
                        </>
                    })
                }
                </h4>
            </div>
        </>

    );
};

export default Commentary;