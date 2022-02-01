import React from 'react';
import classes from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo(props) {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.profilePic}>
                <img
                    src="https://artsartistsartwork.com/wp-content/uploads/2019/07/Milly-Martionou-abstract-painting.jpg"
                    alt=""/>
            </div>
            <h1>{props.profile.fullName}</h1>
            <div className={classes.myAva}>
                <img src={props.profile.photos.large}/>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}  />
            <span>Обо мне: {props.profile.aboutMe}</span>
            <div>
                <ul className={classes.myContacts}> Мои контакты:
                    <li>Facebook: {props.profile.contacts.facebook}</li>
                    <li>Website: {props.profile.contacts.website}</li>
                    <li>VK: {props.profile.contacts.vk}</li>
                    <li>Twitter: {props.profile.contacts.twitter}</li>
                    <li>Instagram: {props.profile.contacts.instagram}</li>
                    <li>Youtube: {props.profile.contacts.youtube}</li>
                    <li>GitHub: {props.profile.contacts.github}</li>
                    <li>MainLink: {props.profile.contacts.mainLink}</li>
                </ul>
            </div>
            <div>
                <div>{props.profile.lookingForAJob ? `Ищу работу: ${props.profile.lookingForAJobDescription}` : null}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;