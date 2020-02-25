import React, {useState, useEffect} from 'react';
import Weather_API from './Weather_API';
import Location_API from './Location_API';

export default function Weather() {
    
   
    
    return (
        <>

            <div>
                <Location_API />
                <Weather_API />
            </div>
        </>
    )
}
