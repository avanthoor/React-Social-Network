import * as React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
                alt=""/>
            <div className={classes.loginBlock}>
                <NavLink to={'/login'}>{props.isAuth ? `${props.login}` : 'Login'}</NavLink>
            </div>
        </header>
    );
};

export default Header;