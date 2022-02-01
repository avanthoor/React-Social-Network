import {
    addPost,
    getStatus,
    getUserProfile,
    setUserProfile,
    updatePostText,
    updateStatus
} from "../../redux/profileReducer.ts";
import Profile from "./Profile";
import {connect} from "react-redux";

import React, {Component} from 'react';
import {useMatch, Navigate, useParams} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.userId)
        this.props.getStatus(this.props.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

// const mapDispatchToProps = (dispatch) => ({
//     addPost: () => dispatch(addPostActionCreator()),
//     updatePostChange: postInner => dispatch(updatePostTextActionCreator(postInner))
// })

const ProfileMatch = (props) => {
    let {userId} = useParams()

    if (!userId) {
        userId = '21941'
    }

    return (
        <AuthRedirectComponent {...props} userId={userId}/>
    )
    // let match = useMatch("/profile/:userId/");
    // return (
    //     <authRedirectComponent {...props} match={match} />
    // )
}

export default connect(mapStateToProps, {
    addPost,
    updatePostText,
    getUserProfile,
    getStatus,
    updateStatus
})(ProfileMatch)