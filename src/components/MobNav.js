import React, { useState } from 'react';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';

export default function MobNav() {


    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState();
    const [modalOpen, setModal] = useState(false);
    const [loginOrSign, setLogOrSign] = useState(false);
    const [loginOutcome, setLoginOutcome] = useState();
    const [collapsed, setCollapsed] = useState(true);
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();
    const toggleNavbar = () => setCollapsed(!collapsed);
    const toggleModal = () => setModal(!modalOpen);
    const toggleSign = () => setLogOrSign(!loginOrSign);
    const toggleLogSign = () => {
        setModal(!modalOpen)
        setLogOrSign(!loginOrSign)
    }

    const handleLogin= () => {
        toggleModal();
        toggleNavbar();
    }

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          setLoginOutcome()
          navigate('/')
        } catch {
          setError("Failed to log out")
        } finally {
            toggleNavbar();
        }
      }

  return (
    <>
        <Navbar container light>
            <NavbarToggler onClick={toggleNavbar} className="mx-3" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="flex-col" navbar>
                    <NavItem>
                        <Link to='/' className='nav-link' onClick={toggleNavbar} >Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/blogs' className='nav-link' onClick={toggleNavbar} >Blog</Link>
                    </NavItem>
                    <NavItem>
                        { currentUser && <Link to='/UserSettings' className='nav-link' onClick={toggleNavbar} >User-Settings</Link>}
                    </NavItem>
                    <NavItem>
                        { currentUser?<Link className='nav-link' onClick={handleLogout}>Log Out</Link> : <Link className='nav-link' onClick={handleLogin} >
                        Create Account / Login
                        </Link>}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <CreateAccount 
            isOpen={modalOpen} 
            toggle={toggleModal} 
            toggleLogSign={toggleLogSign}
        />
        <Login 
            isOpen={loginOrSign} 
            toggle={toggleSign} 
            toggleLogSign={toggleLogSign} 
            loginOutcome={loginOutcome} 
            setLoginOutcome={setLoginOutcome}
        />
    </>
  )
}
