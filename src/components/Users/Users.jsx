import React from 'react';
import classes from "./Users.module.css";
import userDefaultFoto from "../../static/images/userDefaultFoto.png";
import {NavLink} from "react-router-dom";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => <span className={props.currentPage === page ? classes.selectedPage : undefined}
                                         onClick={() => props.onPageChanged(page)} key={page}>{page}</span>)}
            </div>
            {
                props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img className={classes.userPhoto}
                         src={user.photos.small !== null ? user.photos.small : userDefaultFoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {user.isFollowed === true ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                        <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>user.location.country</div>
                    <div>user.location.city</div>
                </span>
            </span>
                </div>)
            }
        </div>
    );
}

export default Users;