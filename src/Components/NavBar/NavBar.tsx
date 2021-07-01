import React from "react";
import {NavLink} from "react-router-dom";
import style from './NavBar.module.css'
import {path} from "../../App";
import Logout from '../Login/Logout';


type NavBarPropsType = {}

const NavBar: React.FC<NavBarPropsType> = (props) => {
    return <div className={style.header}>
        <input type="checkbox" className={style.openSidebarMenu} id="openSidebarMenu"/>
        <label htmlFor="openSidebarMenu" className={style.sidebarIconToggle}>
            <div className={`${style.spinner} ${style.diagonal} ${style.part1}`}/>
            <div className={`${style.spinner} ${style.horizontal}`}/>
            <div className={`${style.spinner} ${style.diagonal} ${style.part2}`}/>
        </label>
        <div className={style.sidebarMenu}>
            <ul className={style.sidebarMenuInner}>
                <li><NavLink to={path.LOGIN}> LogIn </NavLink></li>
                <li><NavLink to={path.REG}> Registration </NavLink></li>
                <li><NavLink to={path.PASS_REC}> Password recovery</NavLink></li>
                <li><NavLink to={path.PASSWORD}> New password </NavLink></li>
                <li><NavLink to={path.PROFILE}> Profile </NavLink></li>
                <li><NavLink to={'/'}> All components </NavLink></li>
                <li><Logout/></li>
            </ul>
        </div>
        <div className={`${style.main} ${style.center}`}>
            <div className={style.mainInner}>
            </div>

        </div>

    </div>

}

export default NavBar