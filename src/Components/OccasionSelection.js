import React, { useState } from 'react';

export default function OccasionSelection({ style, setStyle }) {
    
    // These are all the states for the buttons below
    // const [style , setStyle] = useState([]);
    const [athleticStyle, setathleticStyle] = useState("seasonSelectorButton");
    const [casualStyle, setCasualStyle] = useState("seasonSelectorButton");
    const [nightOutStyle, setNightOutStyle] = useState("seasonSelectorButton");
    const [workStyle, setWorkStyle] = useState("seasonSelectorButton");

 
    // This function will remove the selected value of the button clicked on
    const removestyle = (styleSelection) => {
        const currentStyle = [...style];
        const newStyle = currentStyle.filter(item => item !== styleSelection);
        setStyle(newStyle);
    }

    
    
    return (
        <div className='selectorWrapper'>
            
            {/* This the first button */}
            <input  
                type='button'
                placeholder='Athletic'
                className={athleticStyle}
                value='Athletic'
                onClick={e => {
                    { 
                        if (athleticStyle == 'seasonSelectorButton') {
                            // This is setting the button style class
                            setathleticStyle('selectedButton');
                            
                            // This is setting the value to the state
                            // setSeason(e.target.value);
                            setStyle([...style, e.target.value])
                        } else {
                            // This will change the button style and remove the value
                            setathleticStyle("seasonSelectorButton");
                            removestyle(e.target.value);
                        }
                        
                    }
                    }
                } />

            {/* This the second button */}
            <input  
                type='button'
                placeholder='Casual'
                className={casualStyle}
                value='Casual'
                onClick={e => {
                    { 
                        if (casualStyle == 'seasonSelectorButton') {
                            // This is setting the button style class
                            setCasualStyle('selectedButton');
                            
                            // This is setting the value to the state
                            // setSeason(e.target.value);
                            setStyle([...style, e.target.value])
                        } else {
                            // This will change the button style and remove the value
                            setCasualStyle("seasonSelectorButton");
                            removestyle(e.target.value);
                        }
                        
                    }
                    }
                } />

            
            {/* This the third button */}
            <input  
                type='button'
                placeholder='Night Out'
                className={nightOutStyle}
                value='Night Out'
                onClick={e => {
                    { 
                        if (nightOutStyle == 'seasonSelectorButton') {
                            // This is setting the button style class
                            setNightOutStyle('selectedButton');
                            
                            // This is setting the value to the state
                            setStyle([...style, e.target.value])
                        } else {
                            // This will change the button style and remove the value
                            setNightOutStyle("seasonSelectorButton");
                            removestyle(e.target.value);
                        }
                        
                    }
                    }
                } />

            
            {/* This the forth button */}
            <input  
                type='button'
                placeholder='Work'
                className={workStyle}
                value='Work'
                onClick={e => {
                    { 
                        if (workStyle == 'seasonSelectorButton') {
                            // This is setting the button style class
                            setWorkStyle('selectedButton');
                            
                            // This is setting the value to the state
                            setStyle([...style, e.target.value])
                        } else {
                            // This will change the button style and remove the value
                            setWorkStyle("seasonSelectorButton");
                            removestyle(e.target.value);
                        }
                        
                    }
                    }
                } />
            
        </div>


    )
}
