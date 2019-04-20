import React from "react";
import { NavLink, Link } from "react-router-dom";
import './css/tailwind.css'

const Header = () => {
    return(
        <nav className="header-wrapper">
            <Link className="header-title" to='/'>Zane Neikena</Link>
            <ul className="header-ul">
                <li className="header-li"><NavLink className="navlinks" activeStyle={{fontWeight: 'bold', color: '#019ebd'}} to='/about'>About Me</NavLink></li>
                <li className="header-li"><NavLink className="navlinks" activeStyle={{fontWeight: 'bold', color: '#019ebd'}} to='/projects'>Web Development</NavLink></li>
                <li className="header-li"><NavLink className="navlinks" activeStyle={{fontWeight: 'bold', color: '#019ebd'}} to='/design'>Graphic Design</NavLink></li>
                <li className="header-li"><NavLink className="navlinks" activeStyle={{fontWeight: 'bold', color: '#019ebd'}} to='/cv'>CV</NavLink></li>
                <li className="header-li"><NavLink className="navlinks" activeStyle={{fontWeight: 'bold', color: '#019ebd'}} to='/contact'>Contact Me</NavLink></li>
            </ul>
        </nav>
    )
};

export default Header