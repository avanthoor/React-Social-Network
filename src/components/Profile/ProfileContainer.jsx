import {addPost, setUserProfile, updatePostText} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";

import React, {Component} from 'react';
import * as axios from "axios";
import {useMatch} from "react-router-dom";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId =  this.props.match ? this.props.match.params.userId : '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}


const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
})

// const mapDispatchToProps = (dispatch) => ({
//     addPost: () => dispatch(addPostActionCreator()),
//     updatePostChange: postInner => dispatch(updatePostTextActionCreator(postInner))
// })

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/");
    return (
        <ProfileContainer {...props} match={match} />
    )
}

export default connect(mapStateToProps, {
    addPost,
    updatePostText,
    setUserProfile
})(ProfileMatch)