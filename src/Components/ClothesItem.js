import React from 'react';

export default function ClothesItem({ shoesObj, pantsObj, shirtsObj }) {

      

    //  console.log(props.data.data.pants[0])
    // console.log(props)
    // console.log(JSON.stringify(shirtsObj));
    // console.log(JSON.stringify(pantsObj));
    
    
    
    
    return (
        <>
            <div >
                {pantsObj.data.pants.map((pants, index) => (
                    <div key={index} className='itemContainer'>
                        <div>
                            <img className="clothingItem" src={pants} />
                        </div>
                    </div>
                ))}
                
            </div>

            <div >
                {shoesObj.data.shoes.map((shoes, index) => (
                    <div key={index} className='itemContainer'>
                        <div>
                            <img className="clothingItem" src={shoes} />
                        </div>
                    </div>
                ))}
                
            </div>

            <div >
                {shirtsObj.data.shirts.map((shirt, index) => (
                    <div key={index} className='itemContainer'>
                        <div>
                            <img className="clothingItem" src={shirt} />
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}
