import React from 'react';
import Header from '../components/header/header';
import Card from '../components/card/card';


//css style 
import './landingPage.css';

export default function landingPageContainer() {
    return (
        <div className="container">
            <Header />
            <div className='landingPage'>
                <div className='textLabel'>
                    <div className='textLabel1'>
                        Powerful
                        <br />
                        <a className='textLabel2'>Payment Solutions</a>
                    </div>
                </div>
                <div className='cardContainer'>
                    <Card />
                </div>
            </div>
        </div>
    )
}
