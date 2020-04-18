import React from 'react';
import './App.css';
import LandingPageContainer from './containers/landingPageContainer';
import PaymentDestination from './containers/paymentDestination/paymentDestination';

function App() {
  return (
    <div className="App">
      <LandingPageContainer /> 
      {/* <PaymentDestination /> */}
    </div>
  );
}

export default App;
