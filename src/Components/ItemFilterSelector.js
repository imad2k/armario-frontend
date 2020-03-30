import React, { useState } from 'react';
import LongsleeveBw from '../design-assets/longsleeve-bw.svg';
import PantsBw from '../design-assets/pants-bw.svg';
import ShoesBw from '../design-assets/shoes-bw.svg';
import Pants from './Pants';


export default function ItemFilterSelector() {
    
     // These are all the states for the buttons below
     const [itemType, setItemType] = useState('');
     const [shirt, setShirt] = useState(false);
     const [pants, setPants] = useState(false);
     const [shoes, setShoes] = useState(false);
    
    const setActive = (stateVariable) => {
        if (stateVariable == false) {
            stateVariable = true;
            console.log(stateVariable)
        } else {
            stateVariable = false;
        }
    }
    
    return (
        <div>
            {/* This the first button */}
            
            
            
            <img  
                
                src={LongsleeveBw}
                className={shirt ? 'uploadIconSelected' : 'uploadIcon'}
                value='shirt'
                onClick={e => {
                    setShirt(true);
                    setPants(false);
                    setShoes(false);
                    setItemType('shirt');
                    }
                } />

            {/* This the second button */}
            <img  
                
                src={PantsBw}
                className={pants ? 'uploadIconSelected' : 'uploadIcon'}
                value='pants'
                onClick={e => {
                    setShirt(false);
                    setPants(true);
                    setShoes(false);
                    setItemType('pants');
                    }
                } />
               

            
            {/* This the third button */}
            <img  
                
                src={ShoesBw}
                className={shoes ? 'uploadIconSelected' : 'uploadIcon'}
                value='shoes'
                onClick={e => {
                    setShirt(false);
                    setPants(false);
                    setShoes(true);
                    setItemType('shoes');
                    }
                } />
            
        </div>
    )
}
