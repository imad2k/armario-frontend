import React, { useState } from 'react';
import Modal from 'react-modal';
import ItemUploader from './ItemUploader';
import ItemFilterSelector from './ItemFilterSelector';
import OccasionSelection from './OccasionSelection';
import SeasonSelector from './SeasonSelector';
import Pants from './Pants';

Modal.setAppElement('#root')
export default function NewItemModal() {
    
    const [openModal, setOpenModal] = useState(false); 
    
    return (
        <div>
            
            {/* This is the button outside of the modal that opens the modal upon user trigger */}
            <button onClick={e => setOpenModal(true)} className='addItemButton'>Add Item</button>
            
            
            <Modal 
                isOpen={openModal} 
                onRequestClose={e => setOpenModal(false)}
                className={"itemModal"}
                overlayClassName={"itemModalOverlay"}>

                {/* This is the close button */}
                <div className='itemModalCloseButtonContainer'>
                    <button 
                        onClick={e => setOpenModal(false)} 
                        className='itemModalCloseButton'>X</button>
                </div>

                {/* This is the item type selector */}
                <div className='itemTypeContainer'>
                    <p className='choiceHeader'> Select an Item to Add to Your Closet</p>

                    <div>
                        <ItemFilterSelector />
                    </div>
                </div>

                {/* This is the occasion type selector */}
                <div className='occasionTypeContainer'>
                    <p className='choiceHeader'>Choose Best Occasion</p>
                    <OccasionSelection />
                </div>

                {/* This is the season selector */}
                <div className='seasonTypeContainer'>
                    <p className='choiceHeader'>Choose Best Season</p>
                    <SeasonSelector />
                </div>

                {/* This is the the color match selector */}
                <div></div>

                {/* This is the style type selector */}
                <div></div>

                {/* This is the ItemUpload componenet */}
                <div className="imgUploaderContainer"> 
                    <ItemUploader 
                        seasonSelection={SeasonSelector} 
                        occasionSelection={OccasionSelection} 
                        itemSelection={ItemFilterSelector}/> 
                </div>
                
                
            </Modal>
            
        </div>
    )
}
