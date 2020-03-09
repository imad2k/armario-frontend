import React from 'react';

export default function ClothesItem(props) {

      

    //  console.log(props.data.data.pants[0])
    // console.log(JSON.stringify(props));
    
    
    
    
    return (
        <>
            <div >
                {props.data.data.pants.map((pants, index) => (
                    <div key={index} className='itemContainer'>
                        <div>
                            <img className="clothingItem" src={pants} />
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}
