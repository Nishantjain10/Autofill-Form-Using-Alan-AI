import React from 'react'
import Image from '../Image/robot-img.png'
import {Link} from 'react-router-dom';
// import Bot from '../bot'
import './Landing.css'

function Landing() {
    return(
    <div className='body-background container'>
        <nav className="navigation-bar container">
        <div className="nav-section">
           <h1>VoiceForm</h1>
        </div>
        <div className="nav-option-list">
            <ul className="nav-list">
                <li className="nav-list-items">Home</li>
                <li className="nav-list-items">About</li>
                <li className="nav-list-items">FAQ</li>
            </ul>
        </div>
    </nav>
    <div className="main">
        <div className="text-box">
            <h1>Use Voice Assistant To Fill Your Form</h1>
            <Link to="/bot" className="btn btn-primary">Try Voice Form</Link>
        </div>
        <div className="img-box">
            <img src={Image} alt=""/>
        </div>
    </div>
</div>
    )
}

export default Landing