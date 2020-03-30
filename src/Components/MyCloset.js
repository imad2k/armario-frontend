import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ClothesItem from './ClothesItem';
import axios from 'axios';
import Pants from './Pants';
import Shoes from './Shoes';
import Shirts from './Shirts';
import LongsleeveBw from '../design-assets/longsleeve-bw.svg';
// import LongsleeveCr from '../design-assets/longsleeve-color.svg';
import PantsBw from '../design-assets/pants-bw.svg';
// import PantsCr from '../design-assets/pants-color.svg';
import ShoesBw from '../design-assets/shoes-bw.svg';
// import ShoesCr from '../design-assets/shoes-color.svg';
import TshirtBw from '../design-assets/tshirt-bw.svg';
// import TshirtCr from '../design-assets/tshirt-color.svg';
import Hanger from '../design-assets/hanger-bw.svg';
import ReactModal from './ReactModal';
import NewItemModal from './NewItemModal';



export default function MyCloset() {
    
    //All state is being managed here
    const [pantsURLs, setPantsURLs] = useState(false, []);
    const [shoesURLs, setShoesURLs] = useState(false, []);
    const [shirtsURLs, setShirtsURLs] = useState(false, []); 
    const [active, setActive] = useState('null');
    const [allSelected, setAllSelected] = useState(true);
    const [selectedShirt, setselectedShirt] = useState(false);
    const [selectedPants, setselectedPants] = useState(false);
    const [selectedShoes, setselectedShoes] = useState(false);
    


    //Request to get user's closet items
    useEffect(() => {
        const asyncCall = async () => {
          try{

            //Get user's pants
            const pantsResponse = await axios.get(`http://localhost:5000/get_pants/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setPantsURLs(pantsResponse)
            
            //Get user's t-shirts

            //Get user's shoes
            const shoesResponse = await axios.get(`http://localhost:5000/get_shoes/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setShoesURLs(shoesResponse)

            //Get user's shirts
            const shirtsResponse = await axios.get(`http://localhost:5000/get_shirts/${sessionStorage.token}`, {mode: 'no-cors', headers: { 'Content-Type': 'application/json'}});
            setShirtsURLs(shirtsResponse)

            //Empty state to allow toggling between components
            setActive('all')


          } catch (error) {
            console.log(error)
          }
        }
    
        asyncCall();
      }, []);
    

      //Object that stores all the conponents. The [active] varable is used to call a specific view['active']
      const views = {
                     "shoes": <div className='itemWrapper'><Shoes shoesObj={shoesURLs}/></div>,
                     "shirts": <div className='itemWrapper'> <Shirts shirtsObj={shirtsURLs}/></div>,
                     "pants": <div className='itemWrapper'> <Pants pantsObj={pantsURLs}/> </div>,
                     "all" : <div className='itemWrapper'><Shoes shoesObj={shoesURLs}/> <Shirts shirtsObj={shirtsURLs}/> <Pants pantsObj={pantsURLs}/></div>
                    }[active]

        


        // console.log(shirtsURLs)
        // console.log(JSON.stringify(shirtsURLs));


        
    
    return (

            <div className='myClosetGrid'>
                
                <div><Navbar /></div>
                

                {/* This is how the user uploads files to Firebase and the saved URL to the database */}
                <div className='addItemWrapper'>
                    <NewItemModal />
                </div>
            
                
            


            {/* These are the filters */}
            <div className='itemFilterWrapper'>
                <div className='filterContainer'> 
                    
                    <img    src={Hanger} 
                            className={allSelected ? 'uploadIconSelected' : 'uploadIcon'} 
                            alt='tshirtIcon' 
                            onClick={() => {
                                setActive('all');
                                setAllSelected(true);
                                setselectedShirt(false);
                                setselectedPants(false);
                                setselectedShoes(false);
                            }
                            
                            } />
                    
                    
                    <img    src={LongsleeveBw} 
                            className={selectedShirt ? 'uploadIconSelected' : 'uploadIcon'} 
                            id='longSleeve' 
                            alt='longSleeveIcon'
                            onClick={() => {
                                setActive('shirts');
                                setAllSelected(false);
                                setselectedShirt(true);
                                setselectedPants(false);
                                setselectedShoes(false);
                            }
                            } /> 
                    
                    <img    src={PantsBw} 
                            className={selectedPants ? 'uploadIconSelected' : 'uploadIcon'} 
                            alt='pantsIcon'
                            onClick={() => {
                                setActive('pants');
                                setAllSelected(false);
                                setselectedShirt(false);
                                setselectedPants(true);
                                setselectedShoes(false);

                            }
                            } />
                    
                    <img    src={ShoesBw} 
                            className={selectedShoes ? 'uploadIconSelected' : 'uploadIcon'}
                            alt='shoesIcon'
                            onClick={() => {
                                setActive('shoes');
                                setAllSelected(false);
                                setselectedShirt(false);
                                setselectedPants(false);
                                setselectedShoes(true);
                                
                            }
                            } /> 
                </div>
            </div>
               

            {/* This is object that's storing all of the components  */}
            {views}

            </div>

    )
}
