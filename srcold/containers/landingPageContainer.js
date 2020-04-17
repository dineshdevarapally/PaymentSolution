import React from 'react';
import Header from '../components/header/header';
import Card from '../components/card/card';

//css style 
import './landingPage.css';

export default function landingPageContainer() {
    return (
        <div className="container">
            <Header/>
            <div className='landingPage'>
                <div className='textLabel'>
                    <label className='textLabel1'>Powerful</label><br/>
                    <label className='textLabel2'>Payment Solutions</label>
                </div>
                <div className='cardContainer'>
                <Card/>
                </div>
            </div>
        </div>
    )
}
