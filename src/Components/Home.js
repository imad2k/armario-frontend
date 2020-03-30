import React, {useState, useEffect}  from 'react';
import Weather from './Weather';
import TodaysLook from './TodaysLook';
import Navbar from './Navbar';




export default function Home() {
    
    //set the state for the first name after fetching data from db
    const [userFirstName, setFirstname] = useState('');
    const [test, setTest] = useState("");




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
        
        <div><Navbar /></div>
        
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
