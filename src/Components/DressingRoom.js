import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TopCarousel from './TopCarousel';
import axios from 'axios'
import PantsCarousel from './PantsCarousel';
import ShoesCarousel from './ShoesCarousel';
import topPlacehoder from '../design-assets/select-top.svg';
import pantsPlaceholder from '../design-assets/select-pants.svg';
import shoesPlaceholder from '../design-assets/select-shoes.svg';

export default function DressingRoom() {
    
    // The state for the items from the database
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);
    
    // This is the state for the items selected by the users
    const [outfitTop, setOutfitTop] = useState('');
    const [outfitPants, setOutfitPants] = useState('');
    const [outfitShoes, setOutfitShoes] = useState('');

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
    
     

    //   Save outfit to database
      const saveOutfit  = () => {
        try{
            const endpoint = 'http://localhost:5000/add_outfit';
            const data = {
                token: sessionStorage.getItem('token'),
                shirt_img_url: outfitTop.shirts[0],
                pants_img_url: outfitPants.pants[0],
                shoes_img_url: outfitShoes.shoes[0]
                // occasion: occasionSelection.toString(),
                // season: seasonSelection.toString(),
            };
            const configs = {
                method: 'POST',
                mode: 'cors',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            };
            const response = fetch(endpoint, configs);
            if (response.status == 200) {
                console.log("success son")
            }
            

          } catch (error) {
            console.log(error)
          }
        }
      
      

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
                


                {/* This is the outfit creation carousel section */}
                <div className='dressingRoomOutfit'>
                    <div className='topsWrapper'>
                        {shirts.data ? <TopCarousel shirtsObj={shirts} setOutfitTop={setOutfitTop}/> : null}
                    </div>

                    {/* This is the pants carousel section */}
                    <div className='pantsWrapper'>
                        {pants.data ? <PantsCarousel pantsObj={pants} setOutfitPants={setOutfitPants}/> : null}
                    </div>

                    {/* This is the shirts shoes section */}
                    <div className='shoesWrapper'>
                        {shoes.data ? <ShoesCarousel shoesObj={shoes} setOutfitShoes={setOutfitShoes}/> : null}
                    </div>

                    {/* This is the save outfit button section */}
                    <div className='addButtonWrapper'>
                        
                        {/* This is the top selected by the user */}
                        {outfitTop ? 
                            <input
                                type='image'
                                src={outfitTop.shirts[0]}
                                className='selectedImg'
                                alt='top image selected'
                                />
                            : 
                                <input
                                    type='image'
                                    src={topPlacehoder}
                                    className='selectedImg'
                                    alt='top placeholder'
                                />
                             }

                        {/* This is the pants selected by the user */}
                        {outfitPants ? 
                            <input
                                type='image'
                                src={outfitPants.pants[0]}
                                className='selectedImg'
                                alt='pants image selected'
                                />
                            : 
                                <input
                                    type='image'
                                    src={pantsPlaceholder}
                                    className='selectedImg'
                                    alt='pants placeholder'
                                />
                            }


                        {/* This is the pants selected by the user */}
                        {outfitShoes ? 
                            <input
                                type='image'
                                src={outfitShoes.shoes[0]}
                                className='selectedImg'
                                alt='shoes image selected'
                                />
                            : 
                            <input
                                type='image'
                                src={shoesPlaceholder}
                                className='selectedImg'
                                alt='shoes placeholder'
                            />
                            
                            }


                        {/* This is the save oufit button */}
                        {outfitTop && outfitPants && outfitShoes ? 
                            <input 
                                type='button'
                                value='Save Outfit'
                                className='createOutfitButton'
                                onClick={saveOutfit()}
                                />
                        : null }
                    </div>


                </div>

                
            </div>
        </div>
    </>
    )
}
