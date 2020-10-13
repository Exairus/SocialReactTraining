import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <li><NavLink className={classes.navLink} to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
            <li><NavLink className={classes.navLink} to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink></li>
            <li><NavLink className={classes.navLink} to="/news" activeClassName={classes.active}>News</NavLink></li>
            <li><NavLink className={classes.navLink} to="/music" activeClassName={classes.active}>Music</NavLink></li>
            <li><NavLink className={classes.navLink} to="/settings" activeClassName={classes.active}>Settings</NavLink></li>
        </nav>
    );
}

export default Navbar;