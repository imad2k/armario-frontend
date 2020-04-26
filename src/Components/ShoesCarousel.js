import React, { useState } from 'react';

export default function ShoesCarousel({ shoesObj, setOutfitShoes }) {
    
    const [imgclass, setImgClass] = useState(false);
    
    return (
        <div>
            <div className='galleryContainer'>
                {shoesObj.data.shoes.slice(0).reverse().map((shoes, index) => (
                    <div key={index} className="imgGallery">
                        
                        <input 
                            type='image'
                            src={shoes} 
                            className='caroImg'
                            alt='shoes image'
                            onClick={ e => {
                                setOutfitShoes({shoes});
                                setImgClass(true);
                                }
                            }/>
                    </div>
                ))}
                  <div><p>You're Out of Shoes</p></div>
            </div>
        </div>
    )
}
