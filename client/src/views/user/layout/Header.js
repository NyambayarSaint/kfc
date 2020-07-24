import React from 'react';
import Logout from '../operations/logout';
import {AiOutlineCheck} from 'react-icons/ai'
import {FaCog} from 'react-icons/fa'
import styled from 'styled-components'

const Header = ({user, login}) => {
    return (
        <Container>
            <div style={{ height: 56 }}></div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap pt-2 pb-2 shadow">
                {user.status ?
                    <a className="navbar-brand col-sm-3 col-md-3 mr-0" href="#">{user.name} <span className="right"><AiOutlineCheck/></span></a>
                :
                    <a className="navbar-brand col-sm-3 col-md-3 mr-0" href="#" onClick={login}>Please authenticate! <span className="wrong"><FaCog/></span></a>
                }
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#" onClick={()=>Logout()}>Sign out</a>
                </li>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;

const Container = styled.div `
    background:red;
`;