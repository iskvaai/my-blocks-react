import React from 'react';
import {useParams} from "react-router-dom"

import styles from "./Article.module.css"
import Comments from './Comments';
import {post, posts} from "../../constant"

const Article = () => {
    const params = useParams();
    const postId = parseInt(params.id);
    const postData = posts.find((item) => {
        return item.id === postId;

    })
    console.log(postData);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>

                    <img src={postData.commentUser.imgLink} alt="" />
                    <p>{postData.commentUser.name} {postData.commentUser.dateUser}</p> <br/>

                </div>
                <h1>{postData.title}</h1>

                <div className={styles.flex}>{
                    postData.tag.map((item) => {
                        return <><p>{item}</p></>
                    })
                }

                </div>
                <img src={postData.imageUrl}/> <br/>
                <p>{postData.desc} </p> <br/> <br/>
                <Comments/>
            </div>

        </>
    );
};
export default Article;