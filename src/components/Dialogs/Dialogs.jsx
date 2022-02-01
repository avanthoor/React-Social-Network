import React from 'react';
import classes from './Dialogs.module.css'
import DialogDesc from "./DialogDesc/DialogDesc";
import Messages from "./Messages/Messages";
import {Navigate} from "react-router-dom";

function Dialogs(props) {
    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value

        props.updateMessage(text)
    }

    let dialogsDataElements = props.dialogs
        .map(dialog => <DialogDesc name={dialog.name} id={dialog.id} key={dialog.id} avaSrc={dialog.avaSrc} />)
    let messagesDataElements = props.messages
        .map(message => <Messages name={message.message} id={message.id} key={message.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {dialogsDataElements}
            </div>
            <div className={classes.messages}>
                {messagesDataElements}
                <textarea onChange={onMessageChange} value={props.newMessage} ></textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;