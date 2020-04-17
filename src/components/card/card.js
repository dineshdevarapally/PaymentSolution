import React from 'react';
import './card.css';
import arrowicon from '../../assets/arrowicon.png';

export default function card() {
    return (
        <div className='cardRoot'>
            <h1 className='cardTitle'>Make A Payment</h1>
            <div className='searchBox'>
                <p className='animationbtn'>
                    <input placeholder='What are you paying and where?' />
                    <button>
                        <img src={arrowicon} />
                            <label>get start</label>
                    </button> 
                </p>
            </div>
        </div>
    )
}
