import React from 'react';
import Spinner from './Spinner';

export default function ItemPreview({uneditedImg}) {
    return (
        
            <div className='imgUploaderContainer'>
                {uneditedImg ?
                    <img src={uneditedImg} className='imgUploadPlaceholder' alt='logo' /> 
                : 
                    <Spinner />
                }
                
            </div>
        
    )
}
