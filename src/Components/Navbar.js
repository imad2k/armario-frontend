import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../design-assets/armarioLogo.svg';




export default function NavBar() {
    
    // function hover() {
    //     const ref = useRef()
    //     const [hovered, setHovered] = useState(false)

    //     return [ref, hovered]
    // }

    const mystyle = {
        color: '#c470eb'
    };

    const mystyle2 = {
        color: 'white'
    };

    function hover() {
        const border = {
            color: 'white' 
        };
        return border
    };


    
    return (
        <>
            <div className='navBar'>
                <div className='logoNameWrapper'>
                   <img className='navLogo' src={Logo} />
                </div>
                <div className='pageLinksWrapper'>
                    <Link to='/home' className='navLink'>Home</Link>
                    <Link to='/dressingroom' className='navLink'>Dressing Room</Link>
                    <Link to='/mycloset' className='navLink'>My Closet</Link>
                </div>
                <div className='logout'>
                <Link to='/logout' className='navLink'>Log out</Link>
                </div>
            </div>
        </>
    )
}
