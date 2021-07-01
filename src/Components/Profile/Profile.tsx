import React from 'react';
import style from './Profile.module.css';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../Redux/store';
import UserIsNotAuthorized from '../Login/UserIsNotAuthorized';


type ProfilePropsType = {}

const Profile: React.FC<ProfilePropsType> = () => {
    //let profileData = useSelector<RootStateType, UserDataType | {}>(state => state.login.user)
    let isAuth = useSelector<RootStateType, boolean>(state => state.login.isAuth)

    return <div className={style.wrapper}>
        {!isAuth ? <UserIsNotAuthorized/>
            :
            <h1>Profile</h1>}
    </div>
};


export default Profile;