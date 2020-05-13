import React, {useState, useEffect}  from 'react';
import Weather from './Weather';
import TodaysLook from './TodaysLook';
import Navbar from './Navbar';
import axios from 'axios';




export default function Home() {
    
    //set the state for the first name after fetching data from db
    const [userFirstName, setFirstname] = useState('');
    const [test, setTest] = useState("");

    const [outfits, setOutfits] = useState([]);
    const [randomSpringObj, setRandomSpringObj] = useState([]);
    const [randomSummerObj, setRandomSummerObj] = useState([]);
    const [randomFallObj, setRandomFallObj] = useState([]);
    const [randomWinterObj, setRandomWinterObj] = useState([]);

    const [currentTemp, setCurrentTemp] = useState(null);
    




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


        const randomSummer = [];
        const randomSpring = [];
        const randomFall = [];
        const randomWinter = [];
        
        
        const asyncCall = async () => {
          try{

            // Get all outfits
            const outfitResponse = await axios.get(`http://localhost:5000/get_outfits/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setOutfits(outfitResponse);
            

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
                        if (parsedOutfit.includes('Athletics')) {
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
            } 

            for ( let z = 0; z < 3; z++) {
                randomSpring.push(Object.values(spring)[Math.floor(Math.random()*Object.keys(spring).length)]);
                randomSummer.push(Object.values(summer)[Math.floor(Math.random()*Object.keys(summer).length)]);
                randomFall.push(Object.values(fall)[Math.floor(Math.random()*Object.keys(fall).length)]);
                randomWinter.push(Object.values(winter)[Math.floor(Math.random()*Object.keys(winter).length)])
            } setRandomSpringObj(randomSpring); setRandomSummerObj(randomSummer); setRandomFallObj(randomFall); setRandomWinterObj(randomWinter);
            

          } catch (error) {
            console.log(error)
          }
        }
    
        asyncCall();
      }, []);
    


    //Set logged in user's name by user the token to fetch the data
    useEffect(() => {
        const asyncCall = async () => {
            try{
                // const getFirstName = async () => {
                const endpoint = 'http://localhost:5000/get_name';
                const data = {token: sessionStorage.token};
                const configs = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                };
                const response = await fetch(endpoint, configs);
                const firstName = await response.json()
                setFirstname(firstName.first_name)

            } catch (error) {
                console.log(error);
            };
        };
        asyncCall();
      }, [test]);





    
    return (
    <>
        
        <div><Navbar 
                homeLink={true}
                dressingRoomLink={false}
                savedOutfitsLink={false}  
                myClosetLink={false}
                dressingRoomLink={false}/></div>
        
        <div className='home'>
            
            <div className='weatherTitle'>
                <p>Weather Today</p>
            </div>

            <div className='weatherWrapper'>
                <Weather />
            </div>

            <div className='outfitTitle'>
                <p>Today's Look for {userFirstName}</p>
            </div>

            <div className='outFitWrapper'>
                <TodaysLook />
            </div>
            
        </div>
    </>
    )
}
