import React from 'react';
import classes from "./DialogDesc.module.css";
import {NavLink} from "react-router-dom";

function DialogDesc(props) {
    let path = '/dialogs' + '/' + props.id

    return (
        <div className={classes.dialogDesc}>
            <img src={props.avaSrc} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogDesc;