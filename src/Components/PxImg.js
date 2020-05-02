import React from 'react';


export default function PxImg({ processedImg}) {
    return (
        <div className='imgUploaderContainer'>
            {processedImg ? 
                <img src={URL.createObjectURL(processedImg)} alt='no background image' className='imgUploadPlaceholder'/>
                : 
            null
            }
            
        </div>
    )
}
