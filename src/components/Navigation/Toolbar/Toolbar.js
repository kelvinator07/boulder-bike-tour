import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Open = {
    backgroundColor: 'lightblue'
}

const Close = {
    backgroundColor: 'transparent'
}

const toolbar = ( props ) => {

    let attachedclassNames = {...Close};
    if (props.navBarColor) {
        attachedclassNames = {...Open};
    }

    return(
        <header className="Toolbar" >
            {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
            <div style={{height: '100%', padding: '1px'}}>
                <NavLink to="/"> <Logo/> </NavLink>
            </div>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
            <div className="DesktopOnly">
                <ul className="items">
                    <li><a href="https://facebook.com/kelvinator05" target="_blank"> <span><FontAwesomeIcon icon={faFacebook} /></span></a></li> 
                    <li><a href="https://twitter.com/kelvinator05" target="_blank"> <span><FontAwesomeIcon icon={faTwitter} /></span></a></li> 
                </ul>
            </div>
            <DrawerToggle clicked={props.drawerToggleClicked} />
        </header>
    );
};

export default toolbar;