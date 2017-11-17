import React from 'react';
import ReactDOM from 'react-dom';
import TimeContainer from './container/TimeContainer';

//create a component that output html
const App = () => {
    return (
        <div>
          <h1>Hello World</h1>
          <br />
          <TimeContainer/>
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));