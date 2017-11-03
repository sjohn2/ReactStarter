import React from 'react';
import ReactDOM from 'react-dom';

//create a component that output html
const App = () => {
    return (
        <div>
          Hello World
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));