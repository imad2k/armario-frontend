import React from 'react'

export default function PantsCarousel({ pantsObj}) {
    
    console.log(JSON.stringify(pantsObj));
    
    return (
        <div>
            <div className='galleryContainer'>
                {pantsObj.data.pants.map((pants, index) => (
                    <div key={index} className="imgGallery">
                        <img  src={pants} className='caroImg'/>
                    </div>
                ))}
                  <div><p>You're Out of Pants</p></div>
            </div>
        </div>
    )
}
