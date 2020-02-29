import React from 'react';
import Weather from './Weather';
import TodaysLook from './TodaysLook';

export default function Home() {
    return (
        <div className='home'>
            
            <div className='weatherTitle'>
                <p>Weather Today</p>
            </div>

            <div className='weatherWrapper'>
                <Weather />
            </div>

            <div className='outfitTitle'>
                <p>Today's Look</p>
            </div>

            <div className='outFitWrapper'>
                <TodaysLook />
            </div>
            
        </div>
    )
}
