import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {addPost, setUserProfile, updatePostText} from "../../redux/profileReducer";
import {setUserData} from "../../redux/authReducer";
import * as axios from "axios";

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData({id, email, login})
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer)