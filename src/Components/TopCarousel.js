import React from 'react'

export default function TopCarousel({ shirtsObj }) {
    

    // console.log(JSON.stringify(shirtsObj));
    return (
        
       <div>

            <div className='galleryContainer'>
                {shirtsObj.data.shirts.map((shirts, index) => (
                    <div key={index} className="imgGallery">
                        <img  src={shirts} className='caroImg'/>
                    </div>
                ))}
                  <div><p>You're Out of Items</p></div>
            </div>
        </div>
    )
}
