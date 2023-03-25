import React from 'react'
import '../css/Navbar.css';


export default function Navbar() {
  return (
    <>
    <header>
        <div className='logo'>
            <img src='https://www.karikala.in/assets/images/logo.webp' alt='' />
            </div>
            <div className='menu'>
                <ul className='menu-item'>
                    <li>CASE STUDIES</li>
                    <li>CAREERS </li>
                    <button className='btnDemo'>Request a Demo</button>
                    <div className='phone-btn'>
                        <button  className='phone-btn'>
                        <img src="https://www.karikala.in/assets/images/call-icon.webp" alt="call-icon" class="lazyload" width="20px" height="20px"/>
                        </button>
                   

                    </div>

                </ul>   

            </div>

       
    </header>
    </>
  )
}
