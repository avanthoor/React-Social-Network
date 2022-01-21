import React from 'react';
import Nav from "./Nav/Nav";
import Friend from "./Friend/Friend";
import classes from './Sidebar.module.css'

function Sidebar(props) {
    let friendsElem = props.friends
        .map(friend => <Friend name={friend.name} avaSrc={friend.avaSrc} key={friend.id} />)

    return (
        <div className={classes.sidebar}>
            <Nav />
            <div className={classes.friendBlock}>
                <h2>Friends</h2>
                <div className={classes.friendsList}>
                    {friendsElem}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;