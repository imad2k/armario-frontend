import React from 'react';
import LandingNav from './LandingNav';
import LandingRouter from './LandingRouter';
import ReactModal from './ReactModal';


export default function LandingPage() {
    
    
    
    return (
        <div>
        <>
            <div>
                <LandingRouter />
                <LandingNav />
            </div>
            
            <div>
                <br />
                <br />
                <br />
                <h1>This is the landing page</h1>
            </div>

            <div>
                <ReactModal />
            </div>
            
        </>
        </div>
    )
}
