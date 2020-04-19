import React, { Component } from 'react';
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
         ]
      }
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
