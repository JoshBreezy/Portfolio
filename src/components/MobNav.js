import React, { useState } from 'react';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';

export default function MobNav() {


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

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          setLoginOutcome()
          navigate('/')
        } catch {
          setError("Failed to log out")
        }
      }

  return (
    <>
        <Navbar container light>
            <NavbarToggler onClick={toggleNavbar} className="mx-3" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="flex-col" navbar>
                    <NavItem>
                        <Link to='/' className='nav-link' >Home</Link>
                    </NavItem>
                    <NavItem>
                        { currentUser && <Link to='/UserSettings' className='nav-link' >User-Settings</Link>}
                    </NavItem>
                    <NavItem>
                        { currentUser?<Link className='nav-link' onClick={handleLogout}>Log Out</Link> : <Link className='nav-link' onClick={toggleModal} >
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
