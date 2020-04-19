import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../design-assets/armarioLogo.svg';
import { Redirect } from 'react-router';





export default function NavBar({homeLink, dressingRoomLink, savedOutfitsLink, myClosetLink}) {
    
    const [loggedIn, setLoggedIn] = useState(true);
    const [home, setHome] = useState(homeLink);
    const [dressingRoom, setDressingRoom] = useState(dressingRoomLink);
    const [savedOutfits, setSavedOutfits] = useState(savedOutfitsLink);
    const [myCloset, setMyCloset] = useState(myClosetLink);
    
    return (
        <>
            <div className='navBar'>
                
                {/* This is the app logo image */}
                <div className='logoNameWrapper'>
                   <img className='navLogo' src={Logo} alt='App logo'/>
                </div>

                {/* These are the app navigation links */}
                <div className='pageLinksWrapper'>
                    <Link 
                        to='/home' 
                        className={home ? 'selectedNavLink' : 'navLink'}>Home</Link>

                    <Link 
                        to='/dressingroom' 
                        className={dressingRoom ? 'selectedNavLink' : 'navLink'}>Dressing Room</Link>

                    <Link 
                        to='/savedoutfits' 
                        className={savedOutfits ? 'selectedNavLink' : 'navLink'}>Saved Outfits</Link>

                    <Link 
                        to='/mycloset' 
                        className={myCloset ? 'selectedNavLink' : 'navLink'}>My Closet</Link>
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
