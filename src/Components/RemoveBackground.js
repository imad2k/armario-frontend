import React from 'react';
import axios from 'axios';

export default function RemoveBackground({uneditedImg, selectedImg, setProcessedImg}) {
    
    // This removes the background from the image
    const processImg = async () => {
        if (uneditedImg) {
          const data = new FormData();
          data.append('file', selectedImg, selectedImg.name);
          const endpoint = 'http://localhost:5000/process_img'
          const config = {     
              mode: 'cors',
              headers: { 'Content-Type': 'multipart/form-data' },
              responseType: 'blob'
          }
          const response = await axios.post(endpoint, data, config);
          setProcessedImg(response.data);

        }
    }

    return (
        <div>
            <button 
                                
            id='remove_background'
            // name='re'
            className='removeBackgroundButton'
            // accept='image/*'
            // multiple
            onClick={processImg}
            >Remove Background</button>
        </div>
    )
}
