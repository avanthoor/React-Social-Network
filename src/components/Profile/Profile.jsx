import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Blog/Post/Post";
import Preloader from "../Common/Preloader/Preloader";
import React from "react";

const Profile = (props) => {
    if (!props.profile) {     // т.к. реакт рендерит компоненту до то того как приходят данные с сервера
        return <Preloader/>
    }

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let postInner = e.target.value

        props.updatePostText(postInner)
    }

    let postDataElements = [...props.posts].reverse().map( post => <Post message={post.message} likes={post.likes} id={post.id} key={post.id} photo={props.profile.photos.small}/> )


    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <textarea onChange={onPostChange} value={props.newPostText} />
            <button onClick={onAddPost}>Отправить</button>
            <div className={classes.blogWrapper}>
                {postDataElements}
            </div>
        </div>
    );
};

export default Profile;