import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    var i = 1;

    var myStyle = {
       fontSize: 100,
       color: '#FF0000'
    }

    return (
     <div>
        <h1>Header</h1>
        <h2 style = {myStyle}>Stylish header</h2>
        {/*Comment: This is JSX, not HTML!*/}
        <p>A paragraph</p>
        <p>Javascript expression: {i} + {i} = {i + i}</p>
        <p>Conditional expression: {i} == {i} {i == 1 ? 'True' : 'False'}</p>
     </div>
    );
  }
}

export default App;
