import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';




export default function NavBar() {
    
    // function hover() {
    //     border-bo
    // }
    
    return (
        <div className='navBar'>
             <Link to='/home' className='navLink'>Home</Link>
            <Link to='/dressingroom' className='navLink'>Dressing Room</Link>
            <Link to='/mycloset' className='navLink'>My Closet</Link>
            <Link to='/logout' className='navLink'>Log out</Link>
        </div>
    )
}
