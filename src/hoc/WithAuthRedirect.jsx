import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForAuth = (state) => ({
    isAuth: state.auth.isAuth
})

function WithAuthRedirect(Component) {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/login'/>
        return <Component {...props} />
    }
    return connect(mapStateToPropsForAuth)(RedirectComponent)
}

export default WithAuthRedirect;