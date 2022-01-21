import React from 'react';
import classes from './Post.module.css'
import Preloader from "../../../Common/Preloader/Preloader";

function Post(props) {
    return (
        <div className={classes.post}>
            <div className={classes.postItem}>
                <img src={props.photo} />
                <div className={classes.postMessage}>{props.message}</div>
            </div>
            <div className={classes.like}>Нравится: {props.likes}</div>
        </div>
    );
}

export default Post;