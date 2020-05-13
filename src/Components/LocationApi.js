import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import PartlyCloudyDay from '../design-assets/partly-cloudy-day.svg';
import Cloudy from '../design-assets/cloudy.svg';
import PartlyCloudyNight from '../design-assets/partly-cloudy-night.svg';
import Rain from '../design-assets/rain.svg';
import Snow from '../design-assets/snow.svg';
import Sunny from '../design-assets/sunny.svg';
import Thunderstorm from '../design-assets/thunderstorm.svg';
import Wind from '../design-assets/wind.svg';
import Spinner from './Spinner';



export default function LocationApi({weatherObject, setWeatherObject}) {
    
     //State for user's location and weather data//
     const [ipAddress, setIpAddress] = useState([]);
     const [locationOutput, setLocationObject] = useState({});
     const [test, seTest] = useState("");



     //Get user's location based upon IP address ***currently the IP is hardcoded****//
    useEffect(() => {
        const asyncCall = async () => {
            try{

                // IP Address request & response //
                const ipResponse = await fetch('https://api.ipify.org?format=json');
                const ipOutput = await ipResponse.json();
                setIpAddress(ipOutput);

                //Location request & response //
                const locationResponse = await fetch(`http://api.ipstack.com/${ipOutput.ip}?access_key=611aaacb60abec8a565843122ecc30ff&format=1`);
                const locationOutput = await locationResponse.json();
                setLocationObject(locationOutput);

                // Weather request & response //
                const weatherResponse = await axios.get(`http://127.0.0.1:5000/weather/${locationOutput.latitude +'/'+ locationOutput.longitude}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
                setWeatherObject(weatherResponse);

            } catch (error) {
                console.log(error);
            };
        };
        asyncCall();
      }, [test]);



      //Setting the weather icon //
      function weatherIcon(icon) {
        if (icon === 'partly-cloudy-night' || icon === 'clear-night') {
            return PartlyCloudyNight;
        } else if (icon === 'clear-day' ){
            return Sunny;
        } else if (icon === 'rain'){
            return Rain;
        } else if (icon === 'snow' || icon === 'sleet'){
            return Snow;
        } else if (icon === 'wind'){
            return Wind;
        } else if (icon === 'cloudy'){
            return Cloudy;
        } else if (icon === 'partly-cloudy-day'){
            return PartlyCloudyDay;
        } else if (icon === 'thunderstorm' ){
            return Thunderstorm;
        } else {
            return 'Not Found';
        }
    };

   

    // console.log(ipAddress);
    // console.log(weatherObject);

     


    return (
        <div >
            {weatherObject.data ? 
                <div className='weatherComponent'>
                <img className='tempIcon' alt='weather icon' src={weatherObject.data && weatherIcon(weatherObject.data.icon)}/>
                <p className='temp'>{weatherObject.data && Math.round(weatherObject.data.temp)} F</p> 
                <p className='humidity'>Humidity <br /> {weatherObject.data && Math.round((weatherObject.data.humidity * 100))}%</p> 
                <p className='percep'>Percipitation <br /> {weatherObject.data && Math.round((weatherObject.data.percep * 100))}%</p> 
                <p className='city'>{locationOutput.city},</p>
                <p className='state'>{locationOutput.region_code}</p>
                </div>
            : <Spinner />
            }
            
            
            {/* <p>summary: {weatherObject.data && weatherObject.data.summary}</p>  */}
            
        </div>
    )
}
