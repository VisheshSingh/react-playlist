import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <ul className="nav">
            <li>
                <NavLink exact to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
        </ul>
    );
}

module.exports = Nav;
