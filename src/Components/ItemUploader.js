import React, {useState } from 'react';
import { storage } from './firebase';
import uploadIcon from '../design-assets/upload-icon.svg';
import LongsleeveBw from '../design-assets/longsleeve-bw.svg';
import PantsBw from '../design-assets/pants-bw.svg';
import ShoesBw from '../design-assets/shoes-bw.svg';


export default function Uploader() {
   
   //All state managment is being processed here
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState('')
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState('')
    // const [occasion, setOccasion] = userState('')
    // const [color, setColor] = userState('')
    // const [season, setSeason] = userState('')
    // const [style, setStyle] = userState('')
    const [active, setActive] = useState('null');
    
   

    //The function handles the file that's been added by the user. It will also validate the file type, display error if not correct.
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


    //This function will handle the image selected to be uploaded by the user. 
    const handleUpdate = () => {
        if (image) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);

            //Update the progress bar
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
                    setProgress(progress);
            },
            error => {
                setError(error);
            },
            //Upload image to firebase in specific directory
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    setUrl(url);
                    setProgress(0);

                    const endpoint = `http://localhost:5000/${views}`;
           
                    const data = {
                        img_url: url,
                        token: sessionStorage.token,
                        // occasion: occasion,
                        // color: color,
                        // season: season,
                        // style: style,
                    };
                    const configs = {
                        method: 'POST',
                        mode: 'cors',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(data)
                    };
                    const response = fetch(endpoint, configs);
                    
                    
                });

                
            }
            );
        } else {
            setError("Error: Please Choose an Image to Upload")
        }

        // console.log(url)
        // //Save item's URL and metadata to database
        // if (url) {
        //     const endpoint = `http://localhost:5000/${views}`;
           
        //     const data = {
        //         img_url: url,
        //         token: sessionStorage.token,
        //         // occasion: occasion,
        //         // color: color,
        //         // season: season,
        //         // style: style,
        //     };
        //     const configs = {
        //         method: 'POST',
        //         mode: 'cors',
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify(data)
        //     };
        //     const response = fetch(endpoint, configs);
        //     const authInfo = response.json();
        // } 
    
    }

    

    //Object that stores all the item type values for the post request. The [active] varable is used to call a specific view['active']
    const views = {
        "shoes": "add_shoes",
        "shirts": "add_shirt",
        "pants": "add_pants",
       }[active]

    
   // console.log(url)
    return (
    <>
        <div>

            {/* This displays the image seleced and uploaded by or a the placeholder  */}
            <div>
                {url ? <img src={url} alt='Users image' /> : <img src={uploadIcon} className='navLogo' alt='logo' />}
            </div>
            

            {/* This is the file selection input */}
            <div>
                <input 
                    type='file'
                    id='add_file'
                    name='clothingItem'
                    // multiple
                    onChange={handleChange}
                    />
            </div>

            {/* This is the button that the use clicks to upload the image */}
            <div>
                <button onClick={handleUpdate} className='addItemButton'>Add Item</button>
            </div>
            
            
            {/* This is the error being rendered to the user if they don't upload an image */}
            <div style={{height: "100px"}}>
                {progress > 0 ? <progress value={progress} max='100' /> : ""}
                <p style={{color:'red'}}>{error}</p>
            </div>


            {/* These are the item filters */}
            <div className='uploadWrapper'>
                <div className='uploadContainer'> 
                    
                    <img    src={LongsleeveBw} 
                            className='uploadIcon' 
                            id='longSleeve' 
                            alt='longSleeveIcon'
                            onClick={() => setActive('shirts')} /> 
                    
                    <img    src={PantsBw} 
                            className='uploadIcon' 
                            alt='pantsIcon'
                            onClick={() => setActive('pants')} />
                    
                    <img    src={ShoesBw} 
                            className='uploadIcon' 
                            alt='shoesIcon'
                            onClick={() => setActive('shoes')} /> 
                </div>
            </div>

            {/* These are the drop down selections */}
            
                {/* <div>
                    <label for="occasion">Choose Occasion Type</label>
                    <select id="occasion" onChange={e =>setOccasion(e.target.value)}>
                        <option value='Date Night'>Date Night</option>
                        <option value='Office'>Office</option>
                        <option value='Casual'>Casual</option>
                    </select>

                    <label for="color">Choose Color</label>
                    <select id="color" onChange={e =>setColor(e.target.value)}>
                        <option value='Red'>Red</option>
                        <option value='Black'>Black</option>
                        <option value='Blue'>Blue</option>
                    </select>

                    <label for="season">Choose Season</label>
                    <select id="season" onChange={e =>setSeason(e.target.value)}>
                        <option value='Summer'>Summer</option>
                        <option value='Fall'>Fall</option>
                        <option value='Winter'>Winter</option>
                        <option value='Spring'>Spring</option>
                    </select>

                    <label for="occasion">Choose Style</label>
                    <select id="occasion" onChange={e =>setStyle(e.target.value)}>
                        <option value='Style 1'>Style 1</option>
                        <option value='Stle 2'>Style 2</option>
                        <option value='Style 3'>Style 3</option>
                    </select>
                </div>
             */}

            {/* This is object the complete the end of the Post request endpoint  */}
            <div>
                {views}
            </div>
                
            
        </div>
    </>
    )
}
