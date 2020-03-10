import React from 'react';
import LongsleeveBw from '../design-assets/longsleeve-bw.svg';
import LongsleeveCr from '../design-assets/longsleeve-color.svg';
import PantsBw from '../design-assets/pants-bw.svg';
import PantsCr from '../design-assets/pants-color.svg';
import ShoesBw from '../design-assets/shoes-bw.svg';
import ShoesCr from '../design-assets/shoes-color.svg';
import TshirtBw from '../design-assets/tshirt-bw.svg';
import TshirtCr from '../design-assets/tshirt-color.svg';

export default function ClosetFilter() {
    return (
        <>  
            <div className='filterContainer'> 
                <img src={LongsleeveBw} className='filterIcon' id='longSleeve' alt='longSleeveIcon' />
                <img src={PantsBw} className='filterIcon' alt='pantsIcon' />
                <img src={ShoesBw} className='filterIcon' alt='shoesIcon' />
                <img src={TshirtBw} className='filterIcon' alt='tshirtIcon' />
            </div>
        </>
    )
}
