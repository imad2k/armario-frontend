import React, {useState} from 'react';
import LandingNav from './LandingNav';
import LandingRouter from './LandingRouter';
import axios from 'axios';




export default function LandingPage() {
    
    const [image, setImage] = useState(null);
    const [newImg, setNewImg] = useState(null);
    const [error, setError] = useState('');


    const handleChange = e => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file['type'];
            const validImageTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg"];
            if (validImageTypes.includes(fileType)) {
                setError("");
                setImage(file);
            } else {
                setError("Wrong File Type: Please Select an Image to Upload");
            }
        } 
    };



  const processImg = async () => {
      if (image) {
        const data = new FormData();
        data.append('file', image, image.name);
        const endpoint = 'http://localhost:5000/process_img'
        const config = {     
            mode: 'cors',
            headers: { 'Content-Type': 'multipart/form-data' },
        }
        
        const response = await axios.post(endpoint, data, config);
        setNewImg(response);
      }
  }
    
    console.log(JSON.stringify(newImg))
    return (
        <div>
        <>
           <div>
            <LandingRouter />
            <LandingNav />
        
        
        
            <br />
            <br />
            <br />
            <h1>This is the landing page</h1>
           
                <div>
            
                    <input 
                    type='file'
                    id='add_file'
                    name='clothingItem'
                    className='imgFileInput'
                    // multiple
                    onChange={handleChange}
                    /> 
                    <label htmlFor='add_file' className='fileInputLabel'>Add File</label>
                </div>
        
                <div>
                    <button onClick={processImg} className='uploadImgButton'>Add </button>
                </div>

                <div>
                    {newImg? 
                    <img
                        
                        src={newImg}
                        /> : null}
                </div>
            </div>
        </>
        </div>
    )
}
