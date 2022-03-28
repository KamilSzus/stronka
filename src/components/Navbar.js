import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDragon} from "@fortawesome/free-solid-svg-icons/faDragon";

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth<=900){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize',showButton)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faDragon}/>
                    DRAGON_STORE
                    <FontAwesomeIcon icon={faDragon}/>
                    <i className=''/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Items' className='nav-links' onClick={closeMenu}>
                            Items
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/About' className='nav-links' onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>
                    SIGN UP
                </Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar;
