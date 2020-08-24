import React from 'react';

import kelvinLogo from '../../assets/images/kelvin-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logoo">
        <img src={kelvinLogo} alt="My Logo" />
    </div>
);

export default logo;