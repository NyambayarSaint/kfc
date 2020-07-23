import React from 'react';
import Logout from '../operations/logout';

const Header = () => {
    return (
        <>
            <div style={{ height: 56 }}></div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap pt-2 pb-2 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">User name</a>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#" onClick={()=>Logout()}>Sign out</a>
                </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;