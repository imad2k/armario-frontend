import React from 'react'
import Weather from './Weather'

export default function Home() {
    return (
        <div className='home'>
            
            <div className='weatherTitle'>
                <p>Weather Today</p>
            </div>

            <div className='weatherComponent'>
                {/* <p>weather placeholder</p> */}
                <Weather />
            </div>

            <div className='outfitTitle'>
                <p>Today's Look</p>
            </div>

            <div className='outfitComponent'>
                <p>Out recommendation placeholder</p>
            </div>
            
        </div>
    )
}
