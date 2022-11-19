import React, { useState } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';

export default function DeskNav() {


    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState();
    const [modalOpen, setModal] = useState(false);
    const [loginOrSign, setLogOrSign] = useState(false);
    const [loginOutcome, setLoginOutcome] = useState();
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();
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
            <Nav className="flex-row" navbar>
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
              <NavItem>
                <Link to='/blogs' className='nav-link' >Blogs</Link>
              </NavItem>
            </Nav>
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
