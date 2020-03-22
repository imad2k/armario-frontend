import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingNav from './LandingNav';
import LandingRouter from './LandingRouter';

export default function LandingPage() {
    
    
    
    return (
        <div>
        <>
            {/* <BrowserRouter>
                <div>
                    <LandingNav />
                    <LandingRouter />
                </div>
            </BrowserRouter> */}
            <div>
                <LandingRouter />
                <LandingNav />
            </div>
            
            <p>This is the landing page</p>
            <a>login</a>
            <a>Create Account</a>
        </>
        </div>
    )
}
