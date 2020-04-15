import React from 'react'

export default function TopCarousel({ shirtsObj, setOutfitTop }) {
    

    // console.log(JSON.stringify(shirtsObj));
    return (
        
       <div>

            <div className='galleryContainer'>
                {shirtsObj.data.shirts.map((shirts, index) => (
                    <div key={index} className="imgGallery">
                        
                        <input 
                            type='image'
                            src={shirts} 
                            className='caroImg'
                            alt='shirt image'
                            onClick={ e => {
                                setOutfitTop({shirts});
                                }
                            }/>
                        
                    </div>
                ))}
                  <div><p>You're Out of Tops</p></div>
            </div>
        </div>
    )
}
