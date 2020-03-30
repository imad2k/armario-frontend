import React, { useState } from 'react';


export default function SeasonSelector() {
    
    // These are all the states for the buttons below
    const [season, setSeason] = useState([]);
    const [springStyle, setSpringStyle] = useState("seasonSelectorButton");
    const [summerStyle, setSummerStyle] = useState("seasonSelectorButton");
    const [fallStyle, setFallStyle] = useState("seasonSelectorButton");
    const [winterStyle, setWinterStyle] = useState("seasonSelectorButton");

 
    // This function will remove the selected value of the button clicked on
    const removeSeason = (seasonSelection) => {
        const currentSeasons = [...season];
        const newSeasons = currentSeasons.filter(item => item !== seasonSelection);
        setSeason(newSeasons);
    }
 

    return (
        <div className='selectorWrapper'>
            
            {/* This the first button */}
            <input  
                type='button'
                placeholder='Spring'
                className={springStyle}
                value='Spring'
                onClick={e => {
                    { 
                        if (springStyle == 'seasonSelectorButton') {
                            // This is setting the button style class
                            setSpringStyle('selectedButton');
                            
                            // This is setting the value to the state
                            // setSeason(e.target.value);
                            setSeason([...season, e.target.value])
                        } else {
                            // This will change the button style and remove the value
                            setSpringStyle("seasonSelectorButton");
                            removeSeason(e.target.value);
                        }
                        
                    }
                    }
                } />

            {/* This the second button */}
            <input  
                type='button'
                placeholder='Summer'
                className={summerStyle}
                value='Summer'
                onClick={e => {
                    { 
                        if (summerStyle == 'seasonSelectorButton') {
                            // This is setting the button style class
                            setSummerStyle('selectedButton');
                            
                            // This is setting the value to the state
                            // setSeason(e.target.value);
                            setSeason([...season, e.target.value])
                        } else {
                            // This will change the button style and remove the value
                            setSummerStyle("seasonSelectorButton");
                            removeSeason(e.target.value);
                        }
                        
                    }
                    }
                } />

            
            {/* This the third button */}
            <input  
                type='button'
                placeholder='Fall'
                className={fallStyle}
                value='Fall'
                onClick={e => {
                    { 
                        if (fallStyle == 'seasonSelectorButton') {
                            // This is setting the button style class
                            setFallStyle('selectedButton');
                            
                            // This is setting the value to the state
                            setSeason([...season, e.target.value])
                        } else {
                            // This will change the button style and remove the value
                            setFallStyle("seasonSelectorButton");
                            removeSeason(e.target.value);
                        }
                        
                    }
                    }
                } />

            
            {/* This the forth button */}
            <input  
                type='button'
                placeholder='Winter'
                className={winterStyle}
                value='Winter'
                onClick={e => {
                    { 
                        if (winterStyle == 'seasonSelectorButton') {
                            // This is setting the button style class
                            setWinterStyle('selectedButton');
                            
                            // This is setting the value to the state
                            setSeason([...season, e.target.value])
                        } else {
                            // This will change the button style and remove the value
                            setWinterStyle("seasonSelectorButton");
                            removeSeason(e.target.value);
                        }
                        
                    }
                    }
                } />
            
        </div>
    )
}
