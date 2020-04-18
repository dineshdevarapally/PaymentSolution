import React from 'react';
import Card from '../components/card/card';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

//css style 
import './landingPage.css';

export default function landingPageContainer() {
    return (
        <div className="container">
            <Header />
            <div className='landingPage'>
                <div className='textLabel'>
                    <p className='textLabel1'>  Powerful</p>
                    <p className='textLabel2'>Payment Solutions</p>
                </div>
                <div className='cardContainer'>
                    <Card />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
