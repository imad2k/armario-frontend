import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root')
export default function ReactModal() {
    

    const [openModal, setOpenModal] = useState(false); 

    return (
        
        <div>
            <button onClick={e => setOpenModal(true)} className='addItemButton'>Add Item</button>
            <Modal 
                isOpen={openModal} 
                onRequestClose={e => setOpenModal(false)}
                className={"modal"}
                overlayClassName={"modalOverlay"}
                >
                {/* <h2>Modal title</h2>
                <p>Modal Body</p> */}
                <button onClick={e => setOpenModal(false)}>Close</button>
                
            </Modal>
            
        </div>
    )
}
