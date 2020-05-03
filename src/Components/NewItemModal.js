import React, { useState } from 'react';
import Modal from 'react-modal';
import ItemUploader from './ItemUploader';
import ItemFilterSelector from './ItemFilterSelector';
import OccasionSelection from './OccasionSelection';
import SeasonSelector from './SeasonSelector';
import uploadIcon from '../design-assets/upload-icon.svg';
import PxImg from './PxImg';
import ItemPreview from './ItemPreview';
import AddPhoto from './AddPhoto';
import ChooseAnotherImg from './ChooseAnotherImg';
import RemoveBackground from './RemoveBackground';



Modal.setAppElement('#root')
export default function NewItemModal() {
    
    const [openModal, setOpenModal] = useState(false);
    const [itemType, setItemType] = useState(""); 
    const [season, setSeason] = useState([]);
    const [style , setStyle] = useState([]);

    // This is a state image url for the image uploaded by the user
    const [uneditedImg, setUneditedImg] = useState(null);

     // This is the image that has had foreground extraction
     const [processedImg, setProcessedImg] = useState(null);

      // This is the image file uploded by the user
    const [selectedImg, setSelectedImg] = useState(null);
    
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


                


                {/* This operator will display a placeholder or the image selected by the user */}
                <div className='modalActionWrapper'>
                    {uneditedImg ? 
                        <div>
                            {/* This is the image preview */}
                            <div className='itemPreview'>
                                <ItemPreview uneditedImg={uneditedImg} />
                            </div>

                          {/* This is the remove background button */}
                            <div className='removebackgroundWrapper'>
                                <RemoveBackground selectedImg={selectedImg} uneditedImg={uneditedImg} setProcessedImg={setProcessedImg} processedImg={processedImg}/>
                            </div>

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

                              {/* This is the select another item button */}
                            <div className='selectAnotherItem'>
                                <div >
                                    <ChooseAnotherImg setSelectedImg={setSelectedImg} setUneditedImg={setUneditedImg} setProcessedImg={setProcessedImg}/>
                                </div>

                                {/* This is the ItemUpload componenet */}
                                <div className='uploadButtonWrapper'> 
                                    <ItemUploader 
                                        seasonSelection={season} 
                                        occasionSelection={style} 
                                        itemSelection={itemType}
                                        setUneditedImg={setUneditedImg}
                                        uneditedImg={uneditedImg}
                                        setProcessedImg={setProcessedImg}
                                        processedImg={processedImg}
                                        selectedImg={selectedImg}/> 
                                </div>
                            </div> 

                             
                        </div> 
                    : 

                        <div>
                            <div className='imgUploaderContainer'>
                                <img src={uploadIcon} alt='Users image' className='imgUploadPlaceholder'/>
                            </div>
                            <div className='addPhotoButtonWrapper'>
                                <AddPhoto setSelectedImg={setSelectedImg} setUneditedImg={setUneditedImg}/>
                            </div>
                        </div>
                    }
                </div>


            {/* If the user removed the background of the uploaded image */}
            <div className='modalActionWrapper'>
                {processedImg ?
                <div>  
                    {/* This is the process image */}
                    <div className='itemPreview'> 
                        <PxImg processedImg={processedImg} />
                    </div>
                </div>
                : 
                
                null}
            </div>



      
                
                
                
            </Modal>
            
        </div>
    )
}
