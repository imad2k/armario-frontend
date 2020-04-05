import React from 'react'

export default function ShoesCarousel({ shoesObj }) {
    return (
        <div>
            <div className='galleryContainer'>
                {shoesObj.data.shoes.map((shoes, index) => (
                    <div key={index} className="imgGallery">
                        <img  src={shoes} className='caroImg'/>
                    </div>
                ))}
                  <div><p>You're Out of Shoes</p></div>
            </div>
        </div>
    )
}
