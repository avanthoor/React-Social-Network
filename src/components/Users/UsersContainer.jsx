import {connect} from "react-redux";
import {
    follow, followUser, getUsers, setCurrentPage,
    unfollow, unfollowUser
} from "../../redux/usersReducer.ts";
import React, {Component} from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getAllUsers, getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount} from "../../redux/usersSelector";



