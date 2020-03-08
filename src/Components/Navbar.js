import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../design-assets/armarioLogo.svg';
import { Redirect } from 'react-router';
import Login from './Login';




export default function NavBar() {
    
    const [loggedIn, setLoggedIn] = useState(true);
    
    return (
        <>
            <div className='navBar'>
                <div className='logoNameWrapper'>
                   <img className='navLogo' src={Logo} />
                </div>
                <div className='pageLinksWrapper'>
                    <Link to='/home' className='navLink'>Home</Link>
                    <Link to='/dressingroom' className='navLink'>Dressing Room</Link>
                    <Link to='/mycloset' className='navLink'>My Closet</Link>
                </div>
                <div className='logout'>
                <Link to='/logout' className='navLink' onClick={() => {sessionStorage.setItem('token', '');; setLoggedIn(!loggedIn)}}>Log out</Link>
                {!loggedIn ? <Redirect to='/login' />: null}
                </div>
            </div>
        </>
    )
}
