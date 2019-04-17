import React from "react";
import { NavLink, Link } from "react-router-dom";
import './css/tailwind.css'

const Header = () => {
    return(
        <nav className="header-wrapper">
            <Link className="header-title" to='/'>My Portfolio</Link>
            <ul className="header-ul">
                <li className="header-li"><NavLink className="navlinks" activeStyle={{fontWeight: 'bold'}} to='/about'>About Me</NavLink></li>
                <li className="header-li"><NavLink className="navlinks" activeStyle={{fontWeight: 'bold'}} to='/projects'>My Projects</NavLink></li>
            </ul>
        </nav>
    )
};

export default Header