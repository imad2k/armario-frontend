import React, {useState, useEffect } from 'react';
import { storage } from './firebase';
import uploadIcon from '../design-assets/upload-icon.svg';



export default function Uploader( { itemSelection, occasionSelection, seasonSelection, setUneditedImg, uneditedImg}) {
   

    // console.log(occasionSelection)
    //  console.log(JSON.stringify(seasonSelection));



   //All state managment is being processed here
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
    const [selectedImg, setSelectedImg] = useState(null);


  
    


    //The function handles the file that's been added by the user. It will also validate the file type, display error if not correct.
    // const handleChange = e => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const fileType = file['type'];
    //         const validImageTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg"];
    //         if (validImageTypes.includes(fileType)) {
    //             setError("");
    //             setImage(file);
    //         } else {
    //             setError("Wrong File Type: Please Select an Image to Upload");
    //         }
    //     } 
    // };


    // Handles change for image that the user selects before editing or uploading
    const handleChange = e => {
        const file = URL.createObjectURL(e.target.files[0]);
        const selectedImg = e.target.files[0];
        setUneditedImg(file);
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
                });
            }
            );
        } else {
            setError("Error: Please Choose an Image to Upload")
        }
    }



    //Request to get user's closet items
    useEffect(() => {
        const asyncCall = async () => {
          try{
            if (url) {
            const endpoint = `http://localhost:5000/${itemSelection}`;
            const data = {
                img_url: url,
                token: sessionStorage.getItem('token'),
                occasion: occasionSelection.toString(),
                // color: color,
                season: seasonSelection.toString(),
                // style: style,
            
            };
            const configs = {
                method: 'POST',
                mode: 'cors',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            };
            const response = fetch(endpoint, configs);
            

          }} catch (error) {
            console.log(error)
          }
        }
    
        asyncCall();
      }, [url]);

   

    

    return (
    <>
        <div>

            {/* This displays the image seleced and uploaded by or a the placeholder  */}
            {/* <div>
                {url ? <img src={url} alt='Users image' className='imgUploadPlaceholder'/> : <img src={uploadIcon} className='imgUploadPlaceholder' alt='logo' />}
            </div> */}


            {/* If the user has not selected an image, then display the placeholder */}
            <div>
                {!uneditedImg ? <img src={uploadIcon} alt='Users image' className='imgUploadPlaceholder'/> 
                    :
                    <div> 
                        {/* If the user has selected the image, then display a preview of the image */}
                        <div>
                            <img src={uneditedImg} className='imgUploadPlaceholder' alt='logo' />
                        </div>
                        
                        <div className='progressBar'>
                            {progress > 0 ? <progress value={progress} max='100' /> : ""} 
                        </div>

                    </div>
                }
            </div>
            
            {/* <div>
                {error ? <p className='errorMsg'>{error}</p> : null}
            </div> */}
            
            <div className='imgActionButtonsWrapper'>
                { !uneditedImg ? 
                
                    <div className='uploadButtonWrapper'>
                        <input 
                        type='file'
                        id='add_file'
                        name='clothingItem'
                        className='imgFileInput'
                        accept='image/*'
                        // multiple
                        onChange={handleChange}
                        /> 
                    <label htmlFor='add_file' className='fileInputLabel'>Add Photo of Item</label>
                    </div>
                   
                   : 
                    //  This is the button the user clicks to upload the image
                    // <div className='uploadButtonWrapper'>
                    //     <button onClick={handleUpdate} className='uploadImgButton'>Add {selectedImg.name}</button>
                    // </div>

                    <div>
                        {/* This is the add item button */}
                        <div className='selectAnotherItem'>
                            <input 
                            type='file'
                            id='add_file'
                            name='clothingItem'
                            className='imgFileInput'
                            accept='image/*'
                            // multiple
                            onChange={handleChange}
                            /> 
                            <label htmlFor='add_file' className='fileInputLabel'>Add Photo of Item</label>
                        </div>

                        
                    </div>
                }
                
            </div>

            {uneditedImg ? 
                <div className='removebackgroundWrapper'>
                    <input 
                    type='button'
                    id='remove_background'
                    // name='re'
                    className='imgFileInput'
                    // accept='image/*'
                    // multiple
                    // onChange={handleChange}
                    /> 
                    <label htmlFor='remove_background' className='removeBackgroundButton'>Remove Background</label>
                </div>
            : null}


            {/* This is the file selection input */}
            {/* <div>
                { !image ? 
                
                    <div className='uploadButtonWrapper'>
                        <input 
                        type='file'
                        id='add_file'
                        name='clothingItem'
                        className='imgFileInput'
                        accept='image/*'
                        // multiple
                        onChange={handleChange}
                        /> 
                    <label htmlFor='add_file' className='fileInputLabel'>Add Photo of Item</label>
                    </div>
                   
                   : 
                    //  This is the button the user clicks to upload the image
                    <div className='uploadButtonWrapper'>
                        <button onClick={handleUpdate} className='uploadImgButton'>Add {image.name}</button>
                    </div>
                }
                
            </div> */}

           

            
            
            {/* This is the error being rendered to the user if they don't upload an image */}
            


            

            
                
                
            
        </div>
    </>
    )
}
