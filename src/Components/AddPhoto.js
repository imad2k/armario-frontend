import React from 'react';

export default function AddPhoto({setSelectedImg, setUneditedImg}) {
    
    const handleChange = e => {
        const file = URL.createObjectURL(e.target.files[0]);
        const itemImg = e.target.files[0];
        
        // This sets the selected image state with the image file
        setSelectedImg(itemImg);
        
        // This sets the image preview
        setUneditedImg(file);
    };
    
    return (
        <div>
            <input 
                type='file'
                id='add_file'
                name='clothingItem'
                className='imgFileInput'
                accept='image/*'
                // multiple
                onChange={handleChange}
                /> 
            <label htmlFor='add_file' className='addPhotoButton'>Add Photo of Item</label>
        </div>
    )
}
