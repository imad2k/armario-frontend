import React from 'react';

export default function ClothesItem(props) {

    console.log(props.data)
    
    
    
    return (
        <>
            <div>
                {/* {data.data.map((pants, index) => (
                    <div key={index}>
                        <div>
                            <img className="shirt" src={pants} />
                        </div>
                    </div>
                ))} */}
                
                {/* <img className="shirt" src={props.data.pants[0]} /> */}
                <p>{props.data.status}</p>
            </div>
        </>
    )
}
