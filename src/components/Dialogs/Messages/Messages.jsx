import React from 'react';
import classes from "./Messages.module.css";

function Messages(props) {
    return (
        <div className={classes.message}>{props.name}</div>
    );
}

export default Messages;