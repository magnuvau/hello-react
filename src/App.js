import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor() {
      super();
      this.state = {
         data:
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            }
         ],
         buttonData: []
      }
      this.setStateHandler = this.setStateHandler.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   }
   setStateHandler() {
       var item = "setState..."
       var myArray = this.state.buttonData.slice();
       myArray.push(item);
       this.setState({buttonData: myArray})
   }
   forceUpdateHandler() {
       this.forceUpdate();
   }
      findDomNodeHandler() {
         var myDiv = document.getElementById('myDiv');
         ReactDOM.findDOMNode(myDiv).style.color = 'green';
      }
  render() {

    var i = 1;

    var myStyle = {
       fontSize: 100,
       color: '#FF0000'
    }

    return (
     <div>
        <h1>Header</h1>
        <h2 style={myStyle}>Stylish header</h2>
        {/*Comment: This is JSX, not HTML!*/}
        <p>A paragraph</p>
        <p>Javascript expression: {i} + {i} = {i + i}</p>
        <p>Conditional expression: {i} === {i} {i === 1 ? 'True' : 'False'}</p>

        {/*Insert other components*/}
        <StatelessComponent1/>
        <StatelessComponent2/>

        {/*Create table of dats from this stateful component App*/}
        <table>
           <tbody>
              {this.state.data.map((person, i)=><TableRow key={i}
                 data={person} />)}
           </tbody>
        </table>

        {/*This is a prop sent from RactDOM*/}
        <p>{this.props.prop}</p>

        {/*Button to update state of component*/}
        <p>State Array: {this.state.buttonData}</p>
        <button onClick={this.setStateHandler}>Update state!</button>

        {/*Force update state of component*/}
        <p>Random number: {Math.random()}</p>
        <button onClick={this.forceUpdateHandler}>Force state!</button>

        {/*Force update state of component*/}
        <p id="myDiv">Node</p>
        <button onClick={this.findDomNodeHandler}>Find DOM Node</button>
     </div>
    );
  }
}

class StatelessComponent1 extends React.Component {
   render() {
      return (
         <div>
            <h1>StatelessComponent1</h1>
         </div>
      );
   }
}

class StatelessComponent2 extends React.Component {
   render() {
      return (
         <div>
            <h1>StatelessComponent2</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;
