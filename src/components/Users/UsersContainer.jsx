import {connect} from "react-redux";
import {
    follow, getUsers,
    unfollow
} from "../../redux/usersReducer";
import React, {Component} from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPIComponent extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize} follow={this.props.follow} unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged} users={this.props.users} isFetching={this.props.isFetching}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

// const mapDispatchToProps = (dispatch) => ({
//     follow: (userId) => dispatch(followAC(userId)),
//     unfollow: (userId) => dispatch(unfollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCountAC(usersCount)),
//     toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
// })

export default connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers
})(UsersAPIComponent)