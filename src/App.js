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
         componentData:
         [
            {
               component: 'Uno',
               id: 1
            },
            {
               component: 'Dos',
               id: 2
            },
            {
               component: 'Tres',
               id: 3
            }
         ],
         buttonData: [],
         numberData: 0,
         formData: '...'
      }
      this.setStateHandler = this.setStateHandler.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
      this.setNewNumber = this.setNewNumber.bind(this)
      this.updateFormDataState = this.updateFormDataState.bind(this);
      this.clearFormDataInput = this.clearFormDataInput.bind(this);
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
   setNewNumber() {
      this.setState({numberData: this.state.numberData + 1})
   }
   updateFormDataState(e) {
      this.setState({formData: e.target.value});
   }
   clearFormDataInput() {
      this.setState({formData: ''});
      ReactDOM.findDOMNode(this.refs.formDataClear).focus();
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

         {/*Lifecycle console logging on increment*/}
         <Content number={this.state.numberData}></Content>
         <button onClick={this.setNewNumber}>Increment</button>

         {/*Form*/}
         <p>Form data: {this.state.formData}</p>
         <input type="text" value={this.state.formData} 
               onChange={this.updateFormDataState} />

         {/*Form from child component*/}
         <FormContent formDataProp={this.state.formData} 
               updateFormDataStateProp={this.updateFormDataState}></FormContent>

         {/*Clear form with ref*/}
         <p></p>
         <button onClick={this.clearFormDataInput}>Clear</button>

         {/*Assign keys to dynamically created components*/}
         <div>
            {this.state.componentData.map((dynamicComponent, i) => <DynamicComponent 
               key={i} componentDataProp={dynamicComponent}/>)}
         </div>
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

class Content extends React.Component {
   componentWillMount() {
      console.log('Mounting component...')
   }
   componentDidMount() {
      console.log('Component mounted!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component receiving props...')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component updating...');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component updated!')
   }
   componentWillUnmount() {
      console.log('Unmounting component')
   }
   render() {
      return (
         <div>
            <h3>{this.props.number}</h3>
         </div>
      );
   }
}

class FormContent extends React.Component {
   render() {
      return (
         <div>
            <p>Form data (child): {this.props.formDataProp}</p>
            <input type="text" value={this.props.formDataProp} 
               onChange={this.props.updateFormDataStateProp} />
         </div>
      );
   }
}

class DynamicComponent extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentDataProp.component}</div>
            <div>{this.props.componentDataProp.id}</div>
         </div>
      );
   }
}

export default App;
