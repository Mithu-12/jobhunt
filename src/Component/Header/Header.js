import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useFirebase from './../../Hook/useFirebase';
import { Container, Navbar } from 'react-bootstrap';


const Header = () => {
  const {user, handleLogout } = useFirebase();
    return (
      <div className="reg-background">
      <Navbar className="navmenu"  sticky="top" collapseOnSelect expand="lg" >
<Container>
<Navbar.Brand href="#home" className="nav-hero">[VIBASU.COM]</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
 <NavLink to="/register" className="items-join">
            <li>JOIN FOR FREE </li>
            </NavLink>
             <NavLink className='items-login' to="/login">LOGIN</NavLink>
             
</Navbar.Collapse>
</Container>
</Navbar>
      </div>
   
      
    );
};

export default Header;