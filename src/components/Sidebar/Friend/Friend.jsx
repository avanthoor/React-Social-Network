import React from 'react';
import classes from './Friend.module.css'

function Friend(props) {
    return (
        <div className={classes.friendItem}>
            <img src={props.avaSrc} alt=""/>
            <span className={classes.friendName}>{props.name}</span>
        </div>
    );
}

export default Friend;