import React from 'react';
import './card.css';

export default function card() {
    return (
        <div className='cardRoot'>
            <h1 className='cardTitle'>Make A Payment</h1>
            <div>
                <label>What are you paying and where?</label>
                <button>gett start</button>
            </div>
        </div>
    )
}
