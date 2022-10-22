import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/">
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/a-propos">
                        A Propos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services">
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;