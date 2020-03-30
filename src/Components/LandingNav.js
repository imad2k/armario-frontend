import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../design-assets/armarioLogo.svg';




export default function LandingNav() {
    
    
    return (
        <div>
        <>
            <div className='navBar'>
                <div className='logoNameWrapper'>
                   <img className='navLogo' src={Logo} alt='app logo'/>
                </div>
                <div className='pageLinksWrapper'>
                    <Link to='/login' className='navLink'>Login</Link>
                    <Link to='/signup' className='navLink'>Sign Up</Link>
                </div>
            </div>
        </>
            
        </div>
    )
}
