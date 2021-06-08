import './App.css';
import React from 'react';
import ProgrammedExperiment from './Programmed.js'

//=====================================//
//===button used as a metric for demo==//
//=====================================//
class PurchaseButton extends React.Component{
  state = {
    purchased:false
  }
  onClick = () =>{
    //report data to dataranger
    window.collectEvent('click_purchase_button')
    this.setState({
      purchased:true
    })
  }
  render(){
    const {purchased} = this.state
    return(
      <div>
        {!purchased?
          <button onClick={this.onClick}>Purchase</button>
          :<p>Thank you for purchasing</p>
        }
      </div>
    )
  }
}

//=====================================//
//==========display content============//
//=====================================//
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ProgrammedExperiment/>
        <PurchaseButton></PurchaseButton>
      </header>
    </div>
  );
}

export default App;

  