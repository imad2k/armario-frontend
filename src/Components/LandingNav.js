import React from 'react';
import { Link } from 'react-router-dom';
import LogoName from '../design-assets/armarioName.svg';




export default function LandingNav() {
    
    
    return (
        <div>
        <>
            <div className='landingNav'>
                <div className='logoNameWrapper'>
                   <img className='landingLogo' src={LogoName} alt='app logo'/>
                </div>
                <div className='pageLinksWrapper'>
                    <Link to='/login' className='loginLink'>Login</Link>
                    <Link to='/signup' className='signupLink'>Sign Up</Link>
                </div>
            </div>
        </>
            
        </div>
    )
}
