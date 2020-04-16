import React from 'react'

export default function Outfit({ outfitObj }) {
    
    // console.log(outfitObj)
    
    return (
        <div>
            {outfitObj.data.outfits.map((outfits, index) => (
                    <div key={index} >
                        <div className='smalOoutFitComponent'>
                            <img className="smallShirt" src={outfits[1]} />
                            <img className="smallPants" src={outfits[2]} />
                            <img className="smallShoes" src={outfits[3]} />
                        </div>
                    </div>
                ))}
            
        </div>
    )
}
