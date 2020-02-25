import React, {useState, useEffect}  from 'react';
import Weather_API from './Weather_API';
import axios from 'axios';

export default function Location_API() {
    
     //State for user's location//
     const [locationObject, setLocationObject] = useState({});
     const [weatherObject, setWeatherObject] = useState([]);

   
   
     //Get user's location based upon IP address ***currently the IP is hardcoded****//
    useEffect(() => {
        const asyncCall = async () => {
            try{
                const locationResponse = await fetch('http://api.ipstack.com/196.52.2.53?access_key=611aaacb60abec8a565843122ecc30ff&format=1');
                const locationOutput = await locationResponse.json();
                setLocationObject(locationOutput);
            } catch (error) {
                console.log(error);
            };
            
        };
    
        asyncCall();
      }, []);
    



    //Get weather data based upon location
    const weatherCall = async () => {
            
        const response = await axios.get(`http://127.0.0.1:5000/weather/${locationObject.latitude +'/'+ locationObject.longitude}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
        setWeatherObject(response);
            
    };
    
    if (locationObject) {weatherCall()};
    console.log(weatherObject);
      


    return (
        <div>
            {/* {locationObject && <Weather_API data={locationObject} /> } */}
            <p>IP Address: {locationObject.ip}</p>
            <p>Latitude: {locationObject.latitude}</p>
            <p>Longitude {locationObject.longitude}</p>
        </div>
    )
}
