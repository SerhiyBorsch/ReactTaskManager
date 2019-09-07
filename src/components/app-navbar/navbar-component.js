import React from 'react';
import './navbar-component.css';

let HeaderComponent = () => {
    return (
        <div>
            <nav className="main-navigation">
                <button className="navigation-buttons">home</button>
                <button className="navigation-buttons">List</button>
                <button className="navigation-buttons">Stats</button>
                <button className="navigation-buttons">Settings</button>
            </nav>
        </div>
    )
}

export default HeaderComponent;
