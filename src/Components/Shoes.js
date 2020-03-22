import React from 'react'

export default function Shoes({ shoesObj }) {
    return (
        <div >
                {shoesObj.data.shoes.map((shoes, index) => (
                    <div key={index} className='itemContainer'>
                        <div>
                            <img className="clothingItem" src={shoes} />
                        </div>
                    </div>
                ))}
                
            </div>
    )
}