import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../design-assets/armarioLogo.svg';
import { Redirect } from 'react-router';





export default function NavBar() {
    
    const [loggedIn, setLoggedIn] = useState(true);
    
    return (
        <>
            <div className='navBar'>
                
                {/* This is the app logo image */}
                <div className='logoNameWrapper'>
                   <img className='navLogo' src={Logo} alt='App logo'/>
                </div>

                {/* These are the app navigation links */}
                <div className='pageLinksWrapper'>
                    <Link to='/home' className='navLink'>Home</Link>
                    <Link to='/dressingroom' className='navLink'>Dressing Room</Link>
                    <Link to='/mycloset' className='navLink'>My Closet</Link>
                </div>


                {/* This is the logout button that clears the user's token and redirects the user back to home */}
                <div className='logout'>
                <Link to='/' className='navLink' onClick={() => {sessionStorage.setItem('token', ''); setLoggedIn(!loggedIn)}}>Log out</Link>
                {!loggedIn ? <Redirect to='/' />: null}
                </div>


            </div>
        </>
    )
}
