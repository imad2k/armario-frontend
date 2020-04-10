import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TopCarousel from './TopCarousel';
import axios from 'axios'
import PantsCarousel from './PantsCarousel';
import ShoesCarousel from './ShoesCarousel';

export default function DressingRoom() {
    
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);

    //Request to get user's closet items
    useEffect(() => {
        const asyncCall = async () => {
          try{

            //Get user's pants
            const pantsResponse = await axios.get(`http://localhost:5000/get_pants/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setPants(pantsResponse)
            
            //Get user's t-shirts

            //Get user's shoes
            const shoesResponse = await axios.get(`http://localhost:5000/get_shoes/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setShoes(shoesResponse)

            //Get user's shirts
            const shirtsResponse = await axios.get(`http://localhost:5000/get_shirts/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setShirts(shirtsResponse)

          } catch (error) {
            console.log(error)
          }
        }
    
        asyncCall();
      }, []);
    
    
    return (
    <>
        {/* This is the app navigation */}
        <div><Navbar /></div>

        {/* This is the saved outfits section */}
        <div className='dressingRoomGrid'>
            <div className='savedOutFitsGrid'>
                
                <div className='savedOutfitTitleWrapper'>
                    <p className='savedOutfitTitle'>Saved Outfits</p>
                </div>
                
                <div className='outfitsWrapper'>
                    outfits placeholder
                </div>
            </div>
            
        {/* This is the outfit explorer section */}
            <div className='explorerGrid'>
                {/* This is the section title */}
                <div className='explorerTitleWrapper'>
                    <p className='explorerTitle'>Explore</p>
                </div>
                


                {/* This is the shirts carousel section */}
                





                <div className='dressingRoomOutfit'>
                    <div className='topsWrapper'>
                        {shirts.data ? <TopCarousel shirtsObj={shirts}/> : null}
                    </div>

                    {/* This is the pants carousel section */}
                    <div className='pantsWrapper'>
                        {pants.data ? <PantsCarousel pantsObj={pants}/> : null}
                    </div>

                    {/* This is the shirts shoes section */}
                    <div className='shoesWrapper'>
                        {shoes.data ? <ShoesCarousel shoesObj={shoes}/> : null}
                    </div>
                </div>

                {/* This is the add button section */}
                <div className='addButtonWrapper'>Add button</div>
            </div>
        </div>
    </>
    )
}
