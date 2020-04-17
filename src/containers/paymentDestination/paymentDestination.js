import React from 'react';
import Label from '../../components/label/label';
import './paymentDestination.css';
import home from '../../assets/home.png';
import paymentDestinationImg from '../../assets/paymentDestination.png'
import StatusBar5 from '../../assets/StatusBar5.png';

export default function paymentDestination() {
    return (
        <div className='paymentcontainer'>
            <div className='paper'>
                <img src={home} />
                <div className='mainContainer'>
                    <div className='content'>
                        <div className='iconscontainer'>
                            <img src={StatusBar5} />
                            {/* <img src={paymentDestinationImg} /> */}
                        </div>
                        <Label>paymentDestination</Label>
                        <div className='inputSearch'>
                            <input placeholder='pay parking' />
                        </div>
                        <div className='inputSearch'>
                            <input placeholder='pay parking' />
                        </div>
                    </div>
                    <div className='phoneView'>
                        <Label className='labelStyle'>paymentDestination</Label>
                        <div>
                            <button className='cancelbtn'> Cancel</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
