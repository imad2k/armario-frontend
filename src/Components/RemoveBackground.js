import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

export default function RemoveBackground({uneditedImg, selectedImg, setProcessedImg}) {
    
    const [spinner, setSpinner] = useState(false);
    
    
    // This removes the background from the image
    const processImg = async () => {
        if (uneditedImg) {
            setSpinner(true);
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
          setSpinner(false);

        }
    }

    return (
        <div>
            {spinner ? <div className='removeBackgroundSpinner'><Spinner /></div>
            :
            <button                   
            id='remove_background'
            className='removeBackgroundButton'
            onClick={processImg}
            disabled={spinner}
            >Remove Background</button>
            }
        </div>
    )
}
