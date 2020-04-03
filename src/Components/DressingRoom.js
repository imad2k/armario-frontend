import React from 'react';
import Navbar from './Navbar';
import TopCarousel from './TopCarousel';

export default function DressingRoom() {
    return (
    <>
        <div><Navbar /></div>
        <div className='dressingRoomGrid'>
            <div className='savedOutFitsGrid'>
                
                <div className='savedOutfitTitleWrapper'>
                    <p className='savedOutfitTitle'>Saved Outfits</p>
                </div>
                
                <div className='outfitsWrapper'>
                    outfits placeholder
                </div>
            </div>
            
            <div className='explorerGrid'>
                <div className='explorerTitleWrapper'>
                    <p className='explorerTitle'>Explore</p>
                </div>
                
                <div className='topsWrapper'>
                    <TopCarousel />
                </div>
                <div className='pantsWrapper'>Pants</div>
                <div className='shoesWrapper'>Shoes</div>
                <div className='addButtonWrapper'>Add button</div>
            </div>
        </div>
    </>
    )
}
