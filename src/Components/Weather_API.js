import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function Weather_API({ data }) {
    
    //State for weather//
    const [weatherObject, setWeatherObject] = useState({});
    // const [latitude, setLatitude] = useState({});
    // const [longitude, setLongitude] = useState({});
   
    // console.log(data)

//     useEffect(() => {
//         const asyncCall = async () => {
//             try{
//             const response = await axios.get(`http://127.0.0.1:5000/weather/${data.latitude +'/'+ data.longitude}`, 
//             {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
//             setWeatherObject(response);
            
//         } catch (error) {
//             console.log(error);
//         };
        
//     };

//     asyncCall();
//   }, []);

// asyncCall()



    //Get user's weather based up on their current location//
        // const getWeather = async () => {
            
        //     try {
        //         const url = `https://api.darksky.net/forecast/7230d99b5178d366be7a3cd07111259d/${data.latitude +','+ data.longitude}`
        //         console.log(url)
        //         const response = await fetch(url, {
        //             method: 'GET', 
        //             mode: 'no-cors',
        //             // headers: { "Content-Type": "application/json" },
        //         });
        //         console.log(response)
        //         const output = await response.json();
        //         setWeatherObject(output);
                
                
        //     } catch (error) {
        //     console.log(error);
        //     };
            
        // };
    

 


    // const getWeather = async () => {

    //     let data2 = {latitude: 40.7589111328125,
    //         longitude: -73.97901916503906
    //         }
                
    //     try {
    //         const url = `http://127.0.0.1:5000/weather/${data2.latitude +'/'+ data2.longitude}`
    //         console.log(url)
    //         const response = await fetch(url, {
    //             method: 'GET', 
    //             mode: 'no-cors',
    //             headers: { "Content-Type": "application/json" },
    //         });
    //         const output = await response.json();
    //         setWeatherObject(output);
    //         console.log(weatherObject);
            
            
    //     } catch (error) {
    //         console.log(error);
    //     };
        
    // };
    
    // getWeather()

    // if (data) {getDataAxios(data)};
    // getDataAxios()
    // console.log(weatherObject)



        
//   if (data) {
//     const fetchData = async () => {
//         const response = await fetch(`http://127.0.0.1:5000/weather/${data.latitude +'/'+ data.longitude}`);
//         const results = await response.json();
//         setWeatherObject(results);
//     };
// };

    
//     console.log(weatherObject);
    
  




    // if (data !== '') {
    //     useEffect(() => {
    //         const asyncCall = async () => {
                
    //                 try{
    //                     const response = await axios.get(`http://127.0.0.1:5000/weather/${data.latitude +'/'+ data.longitude}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
    //                     setWeatherObject(response);
    //                 } catch (error) {
    //                     console.log(error);
    //                 }; 
    //             }; 
    //         asyncCall();
    //     }, []);
    // };
  


      

    // if (data) {fetchData()};
    // console.log(weatherObject);
    
    
  
    return (
        <div>
            {/* <p>Current Temp: {weatherObject.timezone}</p> */}
        </div>
    )
}
