import React, {useState, useEffect} from 'react';
import NavBar from './Navbar';
import Outfit from './Outfit';
import Spinner from './Spinner';
import axios from 'axios';
import SpringIcon from '../design-assets/spring-bw.svg';
import SummerIcon from '../design-assets/summer-bw.svg';
import FallIcon from '../design-assets/fall-bw.svg';
import WinterIcon from '../design-assets/winter-bw.svg';
import AthleticIcon from '../design-assets/athletic-bw.svg';
import CasualIcon from '../design-assets/casual-bw.svg';
import NightoutIcon from '../design-assets/nightout-bw.svg';
import WorkIcon from '../design-assets/work-bw.svg';


export default function SavedOutfits() {
    
    const [outfits, setOutfits] = useState([]);
    // const [newOutfit, setNewOutfit] = useState(false);


    //Request to get user's closet items
    useEffect(() => {
        const asyncCall = async () => {
          try{
            const outfitResponse = await axios.get(`http://localhost:5000/get_outfits/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setOutfits(outfitResponse);
            // setNewOutfit(false);
          } catch (error) {
            console.log(error)
          }
        }
    
        asyncCall();
      }, []);


    
    return (
        <div>
            {/* This is the app navigation */}
            <div><NavBar 
                    homeLink={false}
                    dressingRoomLink={false}
                    savedOutfitsLink={true} 
                    myClosetLink={false}
                    dressingRoomLink={false} />
            </div>

            {/* This is the saved outfits section */}
            <div className='savedOutfitsPageGrid'>
                
                    {/* These are the filters */}
                    <div className='outfitFilterWrapper'>
                        
                        
                        
                        {/* This is the seasons filter */}
                        <div className='seasonFilterWrapper'>
                            {/* <p className='seasonFilterTitle'>Seasons</p> */}
                            <input 
                                type='image'
                                src={SpringIcon}
                                className='springIcon'
                                alt='spring icon'
                                id='springIcon'
                            /> 
                            <label htmlFor='springIcon' className='filterLabel'>Spring</label>

                            <input
                                type='image' 
                                src={SummerIcon}
                                className='summerIcon'
                                alt='summer icon'
                                id='summerIcon'
                            /> 
                            <label htmlFor='summerIcon' className='filterLabel'>Summer</label>

                            <input 
                                type='image'
                                src={FallIcon}
                                className='fallIcon'
                                alt='fall icon'
                                id='fallIcon'
                            /> 
                            <label htmlFor='fallIcon' className='filterLabel'>Fall</label>

                            <input 
                                type='image'
                                src={WinterIcon}
                                className='winterIcon'
                                alt='winter icon'
                                id='winterIcon'
                            /> 
                            <label htmlFor='winterIcon' className='filterLabel'>Winter</label>
                        </div>



                        {/* This is the occasion filter */}
                        <div className='occasionFilterWrapper'>
                            <input 
                                type='image'
                                src={AthleticIcon}
                                className='athleticIcon'
                                alt='athletic icon'
                                id='athleticIcon'
                            /> 
                            <label htmlFor='athleticIcon' className='filterLabel'>Athletic</label>

                            <input
                                type='image' 
                                src={CasualIcon}
                                className='casualIcon'
                                alt='casual icon'
                                id='casualIcon'
                            /> 
                            <label htmlFor='casualIcon' className='filterLabel'>Casual</label>

                            <input 
                                type='image'
                                src={NightoutIcon}
                                className='nightoutIcon'
                                alt='night out icon'
                                id='nightoutIcon'
                            /> 
                            <label htmlFor='nightoutIcon' className='filterLabel'>Night Out</label>

                            <input 
                                type='image'
                                src={WorkIcon}
                                className='workIcon'
                                alt='work icon'
                                id='workIcon'
                            /> 
                            <label htmlFor='workIcon' className='filterLabel'>Work</label>
                        </div>
                    </div>
                    

                    {/* These are the saved outfits */}
                    <div className='outfitsWrapper'>
                    { outfits.data ? <Outfit outfitObj={outfits}/> : <Spinner /> }

                    </div>
             
                
            </div>
        </div>
    )
}
