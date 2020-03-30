import React from 'react'

export default function Pants({ pantsObj}) {
    
    
    return (
            <div >
                {pantsObj.data.pants.map((pants, index) => (
                    <div key={index} className='itemContainer'>
                        <div>
                            <img className="clothingItem" src={pants} alt='pants img'/>
                        </div>
                    </div>
                ))}
                
            </div>
    )
}
