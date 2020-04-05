import React from 'react'

export default function Shirts({ shirtsObj}) {
    // console.log(JSON.stringify(shirtsObj));
    
    return (
        <div >
            {shirtsObj.data.shirts.map((shirt, index) => (
                <div key={index} className='itemContainer'>
                    <div>
                        <img className="clothingItem" src={shirt} />
                    </div>
                </div>
            ))}
        
        </div>
    )
}
