import React, { useState } from 'react';
import Modal from 'react-modal';
import ItemUploader from './ItemUploader';

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
                <button onClick={e => setOpenModal(false)} className='itemModalCloseButton'>X</button>

                {/* This is the item type selector */}
                <div></div>

                {/* This is the occasion type selector */}
                <div></div>

                {/* This is the season selector */}
                <div></div>

                {/* This is the the color match selector */}
                <div></div>

                {/* This is the style type selector */}
                <div></div>

                {/* This is the ItemUpload componenet */}
                <div> {/* <ItemUploader /> */} </div>
                
                
            </Modal>
            
        </div>
    )
}
