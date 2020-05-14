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
import SpringOutfits from './SpringOutfits';
import SummerOutfits from './SummerOutfits';
import FallOutfits from './FallOutfits';
import WinterOutfits from './WinterOutfits';
import AthleticOutfits from './AthleticOutfits';
import CasualOutfits from './CasualOutfits';
import NightOutfits from './NightOutfits';
import WorkOutfits from './WorkOutfits';


export default function SavedOutfits() {
    
    const [outfits, setOutfits] = useState([]);
    const [springOutfits, setSpringOutfits] = useState([]);
    const [summerOutfits, setSummerOutfits] = useState([]);
    const [fallOutfits, setFallOutfits] = useState([]);
    const [winterOutfitsObj, setWinterOutfitsObj] = useState([]);
    const [athleticObj, setAthleticObj] = useState([]);
    const [casualObj, setCasualObj] = useState([]);
    const [nightOutObj, setNightOutObj] = useState([]);
    const [workObj, setWorkObj] = useState([]);

    const [active, setActive] = useState('null');
    


    //Request to get user's closet items
    useEffect(() => {
        const spring = [];
        const summer = [];
        const fall = [];
        const winter = [];
        const athletic = [];
        const casual = [];
        const nightOut = [];
        const work = [];
        
        
        
        const asyncCall = async () => {
          try{

            // Get all outfits
            const outfitResponse = await axios.get(`http://localhost:5000/get_outfits/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setOutfits(outfitResponse);
            
            //Empty state to allow toggling between components
            setActive('all');

            // This parses the response into subparts 
            const outfitObj =  outfitResponse.data.outfits;
            if (outfitObj) {
                
                for (let i = 0; i < outfitObj.length; i++) {
                    const parsedOutfit = outfitObj[i][5].split(',');
                    for (let x = 0; x < parsedOutfit.length; x++) {
                        if (parsedOutfit.includes('Spring')) {
                            if(!spring.includes(outfitObj[i])) {
                                spring.push(outfitObj[i]);
                            }   
                        } else if(parsedOutfit.includes('Summer')) {
                            if(!summer.includes(outfitObj[i])) {
                                summer.push(outfitObj[i]);
                            }
                        } else if (parsedOutfit.includes('Fall')) {
                            if(!fall.includes(outfitObj[i])) {
                                fall.push(outfitObj[i]);
                            }
                        } else if (parsedOutfit.includes('Winter')) {
                            if(!winter.includes(outfitObj[i])) {
                                winter.push(outfitObj[i]);
                            }
                        } 
                    }
                }
                
                for (let i = 0; i < outfitObj.length; i++) {
                    const parsedOutfit = outfitObj[i][4].split(',');
                    for (let x = 0; x < parsedOutfit.length; x++) {
                        if (parsedOutfit.includes('Athletic')) {
                            if(!athletic.includes(outfitObj[i])) {
                                athletic.push(outfitObj[i]);
                            }   
                        } else if(parsedOutfit.includes('Casual')) {
                            if(!casual.includes(outfitObj[i])) {
                                casual.push(outfitObj[i]);
                            }
                        } else if (parsedOutfit.includes('Night Out')) {
                            if(!nightOut.includes(outfitObj[i])) {
                                nightOut.push(outfitObj[i]);
                            }
                        } else if (parsedOutfit.includes('Work')) {
                            if(!work.includes(outfitObj[i])) {
                                work.push(outfitObj[i]);
                            }
                        } 
                    }
                }

            } else {
                console.log("Error: couldn't find matching outfit")    
            } setSpringOutfits(spring);
            setSummerOutfits(summer);
            setFallOutfits(fall);
            setWinterOutfitsObj(winter);
            setAthleticObj(athletic);
            setCasualObj(casual);
            setNightOutObj(nightOut);
            setWorkObj(work);

          } catch (error) {
            console.log(error)
          }
        }
    
        asyncCall();
      }, []);

      //Object that stores all the conponents. The [active] varable is used to call a specific view['active']
      const views = {
      "spring": <div className='itemWrapper'>{outfits.data ? <SpringOutfits springOutfits={springOutfits}/> : <Spinner />}</div>,
      "summer": <div className='itemWrapper'>{outfits.data ? <SummerOutfits summerOutfits={summerOutfits}/> : <Spinner />}</div>,
        "fall": <div className='itemWrapper'> {outfits.data ? <FallOutfits fallOutfits={fallOutfits}/> : <Spinner />} </div>,
      "winter": <div className='itemWrapper'>{outfits.data ?  <WinterOutfits winterOutfitsObj={winterOutfitsObj}/> : <Spinner />} </div>,
      "athletic": <div className='itemWrapper'>{outfits.data ?  <AthleticOutfits athleticObj={athleticObj}/> : <Spinner />} </div>,
      "casual": <div className='itemWrapper'>{outfits.data ?  <CasualOutfits casualObj={casualObj}/> : <Spinner />} </div>,
      "night out": <div className='itemWrapper'>{outfits.data ?  <NightOutfits nightOutObj={nightOutObj}/> : <Spinner />} </div>,
      "work": <div className='itemWrapper'>{outfits.data ?  <WorkOutfits workObj={workObj}/> : <Spinner />} </div>,
        "all" : <div className='itemWrapper'>{ outfits.data ? <Outfit outfitObj={outfits}/> : <Spinner /> }</div>
       }[active]


    
    
    
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
                        
                        
                    <p className='seasonFilterTitle'>Season</p>

                        {/* This is the seasons filter */}
                        <div className='seasonFilterWrapper'>
                        
                            <div className='filterIconContainer'>
                            
                                <input 
                                    type='image'
                                    src={SpringIcon}
                                    className='springIcon'
                                    alt='spring icon'
                                    id='springIcon'
                                    onClick={e => setActive('spring')}
                                /> 
                                <label htmlFor='springIcon' className='filterLabel'>Spring</label>
                            </div>

                            <div className='filterIconContainer'>
                                <input
                                    type='image' 
                                    src={SummerIcon}
                                    className='summerIcon'
                                    alt='summer icon'
                                    id='summerIcon'
                                    onClick={e => setActive('summer')}
                                /> 
                                <label htmlFor='summerIcon' className='filterLabel'>Summer</label>
                            </div>

                            <div className='filterIconContainer'>
                                <input 
                                    type='image'
                                    src={FallIcon}
                                    className='fallIcon'
                                    alt='fall icon'
                                    id='fallIcon'
                                    onClick={e => setActive('fall')}
                                /> 
                                <label htmlFor='fallIcon' className='filterLabel'>Fall</label>
                            </div>

                            <div className='filterIconContainer'>
                                <input 
                                    type='image'
                                    src={WinterIcon}
                                    className='winterIcon'
                                    alt='winter icon'
                                    id='winterIcon'
                                    onClick={e => setActive('winter')}
                                /> 
                                <label htmlFor='winterIcon' className='filterLabel'>Winter</label>
                            </div>
                        </div>


                        {/* This is the occasion filter title */}
                        <p className='occasionFilterTitle'>Occasion</p>
                        {/* This is the occasion filter */}
                        <div className='occasionFilterWrapper'>
                            <div className='filterIconContainer'>
                                <input 
                                    type='image'
                                    src={AthleticIcon}
                                    className='athleticIcon'
                                    alt='athletic icon'
                                    id='athleticIcon'
                                    onClick={e => setActive('athletic')}
                                /> 
                                <label htmlFor='athleticIcon' className='filterLabel'>Athletic</label>
                            </div>

                            <div className='filterIconContainer'> 
                                <input
                                    type='image' 
                                    src={CasualIcon}
                                    className='casualIcon'
                                    alt='casual icon'
                                    id='casualIcon'
                                    onClick={e => setActive('casual')}
                                /> 
                                <label htmlFor='casualIcon' className='filterLabel'>Casual</label>
                            </div>

                            <div className='filterIconContainer'>
                                <input 
                                    type='image'
                                    src={NightoutIcon}
                                    className='nightoutIcon'
                                    alt='night out icon'
                                    id='nightoutIcon'
                                    onClick={e => setActive('night out')}
                                /> 
                                <label htmlFor='nightoutIcon' className='filterLabel'>Night Out</label>
                            </div>

                            <div className='filterIconContainer'>
                                <input 
                                    type='image'
                                    src={WorkIcon}
                                    className='workIcon'
                                    alt='work icon'
                                    id='workIcon'
                                    onClick={e => setActive('work')}
                                /> 
                                <label htmlFor='workIcon' className='filterLabel'>Work</label>
                            </div>
                        </div>
                    </div>
                    

                    {/* These are the saved outfits */}
                    <div className='outfitsWrapper'>
                        {views}
                    </div>
             
                
            </div>
        </div>
    )
}
