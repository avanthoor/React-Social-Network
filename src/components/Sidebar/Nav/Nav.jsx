import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><
                    NavLink to="/profile"
                             className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs"
                             className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/users"
                             className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/news"
                             className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink></li>
                <li>
                    <NavLink to="/music"
                             className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings"
                             className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;