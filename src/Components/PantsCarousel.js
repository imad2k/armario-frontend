import React from 'react'

export default function PantsCarousel({ pantsObj, setOutfitPants}) {
    
    // console.log(JSON.stringify(pantsObj));
    
    return (
        <div>
            <div className='galleryContainer'>
                {pantsObj.data.pants.slice(0).reverse().map((pants, index) => (
                    <div key={index} className="imgGallery">
                        
                        <input 
                            type='image'
                            src={pants} 
                            className='caroImg'
                            alt='pants image'
                            onClick={ e => {
                                setOutfitPants({pants});
                                }
                            }/>
                    </div>
                ))}
                  <div><p>You're Out of Pants</p></div>
            </div>
        </div>
    )
}
