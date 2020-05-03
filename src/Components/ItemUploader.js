import React, {useState, useEffect } from 'react';
import { storage } from './firebase';
import axios from 'axios';




export default function Uploader( { itemSelection, occasionSelection, seasonSelection, processedImg, selectedImg}) {
   

    // console.log(occasionSelection)
    //  console.log(JSON.stringify(processedImg));



   //All state managment is being processed here
    
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');


   
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


    //This function will handle the image selected to be uploaded by the user. 
    const handleUpload = () => {
        if (processedImg) {
            // const uploadTask = storage.ref(`images/${processedImg.name}`).put(processedImg);
            const uploadTask = storage.ref(`images/${selectedImg.name}`).put(processedImg);

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
                storage.ref('images').child(selectedImg.name).getDownloadURL().then(url => {
                    setUrl(url);
                    setProgress(0);
                });
            }
            );
        }else if (selectedImg) {
            const uploadTask = storage.ref(`images/${selectedImg.name}`).put(selectedImg);

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
                storage.ref('images').child(selectedImg.name).getDownloadURL().then(url => {
                    setUrl(url);
                    setProgress(0);
                });
            }
            );
        }else {
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

            


            {/* This is the button the user clicks to upload the image */}
            
               
            <button onClick={handleUpload} className='uploadImgButton'>Add to Closet</button>
            <div className='progressBar'>
                {progress > 0 ? <progress value={progress} max='100' /> : ""} 
            </div>
    
            {/* This is the error being rendered to the user if they don't upload an image */}
 
        </div>
    </>
    )
}
