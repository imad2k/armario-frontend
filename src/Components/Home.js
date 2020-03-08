import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import Weather from './Weather';
import TodaysLook from './TodaysLook';

export default function Home() {
    
    const [userFirstName, setFirstname] = useState('');
    const [test, seTest] = useState("");

    useEffect(() => {
        const asyncCall = async () => {
            try{

                //Create an account route//
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

        

        // console.log(sessionStorage.token)
        
        // if (accountCreation === 'successfully created account') {
        //     setRegisteration(!registeration);
        // }
        // console.log(accountCreation);
    // }

            } catch (error) {
                console.log(error);
            };
        };
        asyncCall();
      }, [test]);

    //Create an account route//
    // const getFirstName = async () => {
    //     const endpoint = 'http://localhost:5000/get_name';
    //     const data = {
    //         token: sessionStorage.token   
    //     };
    //     const configs = {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(data)
    //     };
    //     const response = await fetch(endpoint, configs);
    //     const firstName = await response.json()
    //     setFirstname(firstName.first_name)

        

    //     // console.log(sessionStorage.token)
        
    //     // if (accountCreation === 'successfully created account') {
    //     //     setRegisteration(!registeration);
    //     // }
    //     // console.log(accountCreation);
    // }

    // getFirstName();
    
    return (
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

            <div>
                {/* <button onClick={e => getFirstName()} >hi</button> */}
            </div>
            
        </div>
    )
}
