import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TopCarousel from './TopCarousel';
import axios from 'axios';
import PantsCarousel from './PantsCarousel';
import ShoesCarousel from './ShoesCarousel';
import topPlacehoder from '../design-assets/shirt-bw.svg';
import pantsPlaceholder from '../design-assets/pants-bw.svg';
import shoesPlaceholder from '../design-assets/shoes-bw.svg';
import OutfitSeason from './OutfitSeason';
import OccasionSelector from './OccasionSelection';
import Outfit from './Outfit';
import Spinner from './Spinner';

export default function DressingRoom() {
    
    // The state for the items from the database
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);

    // const [outfits, setOutfits] = useState([]);
    // const [newOutfit, setNewOutfit] = useState(false);
    
    // This is the state for the items selected by the users
    const [outfitTop, setOutfitTop] = useState('');
    const [outfitPants, setOutfitPants] = useState('');
    const [outfitShoes, setOutfitShoes] = useState('');
    const [season, setSeason] = useState([]);
    const [style, setStyle] = useState([]);

    //Request to get user's closet items
    useEffect(() => {
        const asyncCall = async () => {
          try{

            //Get user's pants
            const pantsResponse = await axios.get(`http://localhost:5000/get_pants/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setPants(pantsResponse)
            

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


    //Request to get user's closet items
    // useEffect(() => {
    //     const asyncCall = async () => {
    //       try{
    //         const outfitResponse = await axios.get(`http://localhost:5000/get_outfits/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
    //         setOutfits(outfitResponse);
    //         setNewOutfit(false);
    //       } catch (error) {
    //         console.log(error)
    //       }
    //     }
    
    //     asyncCall();
    //   }, [newOutfit]);



    
    //  This function will clear the state
      const clearState = () => {
        setOutfitTop('');
        setOutfitPants('');
        setOutfitShoes('');
        setSeason([]);
        setStyle([]);
      }

    //   Save outfit to database
      const saveOutfit  = async () => {
        try{
            const endpoint = 'http://localhost:5000/add_outfit';
            const data = {
                token: sessionStorage.getItem('token'),
                shirt_img_url: outfitTop.shirts[0],
                pants_img_url: outfitPants.pants[0],
                shoes_img_url: outfitShoes.shoes[0],
                occasion: style.toString(),
                season: season.toString()
            };
            const configs = {
                method: 'POST',
                mode: 'cors',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            };
            const response = await fetch(endpoint, configs);
            clearState();
            // setNewOutfit(true);

          } catch (error) {
            console.log(error)
          }
        }
      
        
      

    return (
    <>
        {/* This is the app navigation */}
        <div><Navbar 
                homeLink={false}
                dressingRoomLink={true}
                savedOutfitsLink={false} 
                myClosetLink={false}
                /></div>

     
        <div className='dressingRoomGrid'>

            {/* This is the saved outfits section */}
            {/* <div className='savedOutFitsGrid'>
                
                <div className='savedOutfitTitleWrapper'>
                    <p className='savedOutfitTitle'>Saved Outfits</p>
                </div>
                
                <div className='outfitsWrapper'>
                 { outfits.data ? <Outfit outfitObj={outfits}/> : <Spinner /> }

                </div>
            </div> */}
            





        {/* This is the outfit explorer section */}
            <div className='explorerGrid'>
                {/* This is the section title */}
                <div className='explorerTitleWrapper'>
                    <p className='explorerTitle'>Explore</p>
                </div>
                

                {/* This is the outfit creation carousel sections */}
                <div className='dressingRoomOutfit'>
                    {/* This is the top carousel quadrant */}
                    <div className='topsWrapper'>
                        {shirts.data ? <TopCarousel shirtsObj={shirts} setOutfitTop={setOutfitTop}/> : null}
                    </div>

                    {/* This is the pants carousel quadrant */}
                    <div className='pantsWrapper'>
                        {pants.data ? <PantsCarousel pantsObj={pants} setOutfitPants={setOutfitPants}/> : null}
                    </div>

                    {/* This is the shirts shoes quadrant */}
                    <div className='shoesWrapper'>
                        {shoes.data ? <ShoesCarousel shoesObj={shoes} setOutfitShoes={setOutfitShoes}/> : null}
                    </div>



                    {/* This is the meta data and save button quadrant section */}
                    <div className='selectItemsWrapper'>
                        
                        {/* This is the top selected by the user */}
                        {outfitTop ? 
                            <input
                                type='image'
                                src={outfitTop.shirts[0]}
                                className='selectedImg'
                                alt='top image selected'
                                />
                            : 
                            <div className='topPlaceholderWrapper'>
                                <input
                                    type='image'
                                    src={topPlacehoder}
                                    className='selectedImg'
                                    alt='top placeholder'
                                    id='topPlaceholder'
                                /> <br />
                                <label htmlFor='topPlaceholder' className='imgPlaceholderLabel'>Select a Top</label>
                            </div>
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
                            <div className='pantsPlaceholderWrapper'> 
                                <input
                                    type='image'
                                    src={pantsPlaceholder}
                                    className='selectedImg'
                                    alt='pants placeholder'
                                    id='pantsPlaceholder'
                                /> <br />
                                <label htmlFor='pantsPlaceholder' className='imgPlaceholderLabel'>Select Pants</label>
                            </div>
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
                            <div className='shoesPlaceholderWrapper'> 
                                <input
                                    type='image'
                                    src={shoesPlaceholder}
                                    className='selectedImg'
                                    alt='shoes placeholder'
                                    id='shoesPlaceholder'
                                /> <br />
                                <label htmlFor='shoesPlaceholder' className='imgPlaceholderLabel'>Select Shoes</label>
                            </div>
                            }


                        {/* This is the tags and save button quadrant */}
                        {outfitTop && outfitPants && outfitShoes ? 
                            
                            <div className='outfitTagsWrapper'>
                                <div className='outfitTags'>
                                    <OutfitSeason season={season} setSeason={setSeason} />
                                </div>

                                <div  className='outfitTags'>  
                                    <OccasionSelector style={style} setStyle={setStyle}/>
                                </div>
                            
                                <input 
                                    type='button'
                                    value='Save Look'
                                    className='createOutfitButton'
                                    onClick={e => saveOutfit()}
                                    />
                            </div>
                        : null }
                    </div>


                </div>

                
            </div>
        </div>
    </>
    )
}
