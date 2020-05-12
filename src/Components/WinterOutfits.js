import React from 'react'

export default function WinterOutfits({ winterOutfitsObj }) {
    
    
    return (
        <div className='outfitGalleryContainer'>
            {winterOutfitsObj.slice(0).reverse().map((outfits, index) => (
                    <div key={index} className="outfitImgGallery">
                        <div className='smalOoutFitComponent'>
                            <img className="smallShirt" src={outfits[1]} />
                            <img className="smallPants" src={outfits[2]} />
                            <img className="smallShoes" src={outfits[3]} />
                        </div>
                    </div>
                ))}
            <div><p>You're out of outfits</p></div>
        </div>
    )
}
