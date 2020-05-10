import React, {useState} from 'react';
import LandingNav from './LandingNav';
import LandingRouter from './LandingRouter';
import { Link } from 'react-router-dom';
import SectionImg from '../design-assets/landingPageImg.svg';





export default function LandingPage() {
    

    return (
        
        <>
           <div>
            <LandingRouter />
            <LandingNav />

            <div>
                <section className='landingSection1'>
                    <div className='leftText'>
                        <p className='sec1line1'>Discover. Create. Save.</p>
                        <p className='sec1para1'>Armario is a new type of shopping experience. Easily curate your outfits from items you already own and new pieces from your favorite brands.</p> 
                        <Link to='/signup' className='signupLink2'>Sign Up</Link>
                    </div>
                    
                    <div className='rightImg'>
                        <img src={SectionImg} alt='first section image' className='firstImg'></img>
                    </div>
                </section>
            </div>
           
                
        
                
            </div>
        </>
        
    )
}
