import React, {useCallback, useEffect} from 'react';
import classes from "./Users.module.css";
import userDefaultFoto from "../../static/images/userDefaultFoto.png";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers, getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount} from "../../redux/usersSelector";
import {getUsers} from "../../redux/usersReducer.ts";

function Users(props) {



    const users = useSelector(getAllUsers)
    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)

    const dispatch = useDispatch()

    const follow = useCallback((userId) => dispatch(follow(userId)), [])


    const unfollow = useCallback((userId) => dispatch(unfollow(userId)), [])

    const onPageChanged = useCallback((pageNumber) => dispatch(getUsers(pageNumber, pageSize)), [])

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [])

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => <span className={currentPage === page ? classes.selectedPage : undefined}
                                         onClick={() => onPageChanged(page)} key={page}>{page}</span>)}
            </div>
            {
                users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img className={classes.userPhoto}
                         src={user.photos.small !== null ? user.photos.small : userDefaultFoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {user.isFollowed
                        ? <button onClick={() => {
                            unfollow(user.id)

                        }}>Unfollow</button>
                        : <button onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
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