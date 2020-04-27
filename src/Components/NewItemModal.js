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
    const [itemType, setItemType] = useState(""); 
    const [season, setSeason] = useState([]);
    const [style , setStyle] = useState([]);
    const [uneditedImg, setUneditedImg] = useState(null);
    
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


                {/* This is the ItemUpload componenet */}
                <div className="imgUploaderContainer"> 
                    <ItemUploader 
                        seasonSelection={season} 
                        occasionSelection={style} 
                        itemSelection={itemType}
                        setUneditedImg={setUneditedImg}
                        uneditedImg={uneditedImg}/> 
                </div>

                {uneditedImg ?
                    <div>
                        {/* This is the item type selector */}
                        <div className='itemTypeContainer'>
                            <p className='choiceHeader'> Select an Item Type</p>

                            <div>
                                <ItemFilterSelector setItemType={setItemType}/>
                            </div>
                        </div>



                        {/* This is the occasion type selector */}
                        <div className='occasionTypeContainer'>
                            <p className='choiceHeader'>Choose Best Occasion</p>
                            <OccasionSelection style={style} setStyle={setStyle} />
                        </div>



                        {/* This is the season selector */}
                        <div className='seasonTypeContainer'>
                            <p className='choiceHeader'>Choose Best Season</p>
                            <SeasonSelector season={season} setSeason={setSeason} />
                        </div>
                    </div> 
                : null}



                {/* This is the the color match selector */}
                <div></div>

                {/* This is the style type selector */}
                <div></div>



                
                
                
            </Modal>
            
        </div>
    )
}
