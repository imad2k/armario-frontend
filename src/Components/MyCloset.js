import React, { useState, useEffect } from 'react';
import ClosetFilter from './ClosetFilter';
import ClothesItem from './ClothesItem';
import axios from 'axios';

export default function MyCloset() {
    
    // const [pantsInput, setPantsInput] = useState('');
    const [pantsURLs, setPantsURLs] = useState(true, {}); 




    useEffect(() => {
        const asyncCall = async () => {
          try{
            const response = await axios.get(`http://localhost:5000/get_pants/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setPantsURLs(response)        
          } catch (error) {
            console.log(error)
          }
        }
    
        asyncCall();
      }, []);
    

    //   if (pantsURLs) {
        console.log(pantsURLs.data)
    //   }
        
    
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
            
            <div className='itemWrapper'>
               {pantsURLs && pantsURLs.data ? <ClothesItem data={pantsURLs}/> : null} 
            </div>

            {/* {pantsURLs ? <p> {pantsURLs.data.pants} </p> : null} */}
        </div>
    )
}
