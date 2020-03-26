import React, { useState } from 'react';
import Modal from 'react-modal';
import ItemUploader from './ItemUploader';

Modal.setAppElement('#root')
export default function ReactModal() {
    

    const [openModal, setOpenModal] = useState(false); 

    return (
        
        <div>
            <button onClick={e => setOpenModal(true)}>Open Modal</button>
            <Modal 
                isOpen={openModal} 
                onRequestClose={e => setOpenModal(false)}
                style={
                    {overlay: {}, content: {}}
                }
                className={"modal"}
                overlayClassName={"modalOverlay"}
                >
                <h2>Modal title</h2>
                <p>Modal Body</p>
                <button onClick={e => setOpenModal(false)}>Close</button>
                <ItemUploader />
            </Modal>
            
        </div>
    )
}
