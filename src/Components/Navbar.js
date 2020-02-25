import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';




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
        <div className='navBar'>
             {/* <Link style={{color: '#c470eb'}} to='/home' className='navLink'>Home</Link> */}
             {/* <Link style={mystyle} to='/home' className='navLink'>Home</Link> */}
             <Link style={{'&:hover':{'borderRight': "solid 1px #cccccc"}}}  to='/home' className='navLink'>Home</Link>
            <Link to='/dressingroom' className='navLink'>Dressing Room</Link>
            <Link to='/mycloset' className='navLink'>My Closet</Link>
            <Link to='/logout' className='navLink'>Log out</Link>
        </div>
    )
}
