import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
//same folder theke import korle shudu matro ./ dite hobe and different folder theke import korle shei folder er tulona onujayi .../ aivabe dite hobe joto step pichone giye folder ta pabo totota dot dibo

const Header = () => {
    return (
        <div className="header">
            <h2>This is header</h2>
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;