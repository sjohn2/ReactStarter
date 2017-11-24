import React from 'react';
import ReactDOM from 'react-dom';
//import TimeContainer from './container/TimeContainer';
//import ProductDetailContainer from './container/ProductContainer';
import LandingScreen from './container/LandingScreenContainer';
import DiscriptionScreen from './container/DiscriptionScreenContainer';
//create a component that output html
const App = () => {
    return (
        <div>
          <br />
          <LandingScreen/>
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));