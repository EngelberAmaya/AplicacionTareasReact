import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeclassname="active" className='nav-item nav-link' to="/">Home</NavLink>
                    <NavLink activeclassname="active" className='nav-item nav-link' to="/about">About</NavLink>
                    <NavLink activeclassname="active" className='nav-item nav-link' to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
