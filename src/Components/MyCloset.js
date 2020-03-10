import React, { useState, useEffect } from 'react';
import ClosetFilter from './ClosetFilter';
import ClothesItem from './ClothesItem';
import axios from 'axios';

export default function MyCloset() {
    
    // const [pantsInput, setPantsInput] = useState('');
    const [pantsURLs, setPantsURLs] = useState(true, []);
    const [shoesURLs, setShoesURLs] = useState(true, []);
    const [shirtsURLs, setShirtsURLs] = useState(true, []); 



    //Request to get user's closet items
    useEffect(() => {
        const asyncCall = async () => {
          try{

            //Get user's pants
            const pantsResponse = await axios.get(`http://localhost:5000/get_pants/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setPantsURLs(pantsResponse)
            
            //Get user's t-shirts

            //Get user's shoes
            const shoesResponse = await axios.get(`http://localhost:5000/get_shoes/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setShoesURLs(shoesResponse)

            //Get user's shirts
            const shirtsResponse = await axios.get(`http://localhost:5000/get_shirts/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setShirtsURLs(shirtsResponse)


          } catch (error) {
            console.log(error)
          }
        }
    
        asyncCall();
      }, []);
    


        // console.log(shirtsURLs)
        // console.log(JSON.stringify(shirtsURLs));
    
    return (
        <div className='myClosetGrid'>

            <div className='addItemWrapper'>
                {/* <button className='addItemButton' onClick={e => getPants()}>Add</button> */}
            </div>
        
            {/* <div>
                <input 
                    type='text' 
                    placeholder='Add Image URl' 
                    id='img_url' 
                    onChange={e => setPantsInput(e.target.value)} />
            </div> */}
           
            <div className='itemFilterWrapper'>
                <ClosetFilter />
            </div>
            
            {/* <div className='itemWrapper'>
               {pantsURLs && pantsURLs.data ? <ClothesItem data={pantsURLs}/> : null} 
            </div> */}

            <div className='itemWrapper'>
               {shoesURLs, pantsURLs, shirtsURLs && shoesURLs.data, shirtsURLs.data ? <ClothesItem shoesObj={shoesURLs} pantsObj={pantsURLs} shirtsObj={shirtsURLs}/> : null} 
               
            </div>

            
        </div>
    )
}
