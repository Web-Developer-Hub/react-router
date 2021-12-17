import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Hearder = () => {

    return (
        <div className='header'>
            <nav className='tag'>
                <ul>
                    <li>
                        <NavLink to="/" style={isActive => ({
                            color: isActive ? "cyan" : "white"
                        })}>React.JS</NavLink>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" style={isActive => ({
                            color: isActive ? "cyan" : "white"
                        })}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about_me" style={isActive => ({
                            color: isActive ? "cyan" : "white"
                        })}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" style={isActive => ({
                            color: isActive ? "cyan" : "white"
                        })}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={isActive => ({
                            color: isActive ? "cyan" : "white"
                        })}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Hearder;