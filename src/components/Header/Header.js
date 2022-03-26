import React from 'react';
import './Header.module.css';
import logo from '../../assets/images/logo.png';
import Profile from "../Profile/Profile";

const Header = (props) => {
    return (
        <header>
            <Profile person={props.person}/>
            <img src={logo} alt="logo"/>
            <button>Панель управления</button>
        </header>
    );
};

export default Header;