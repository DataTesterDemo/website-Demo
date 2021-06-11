import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';

//========================================//
//==========Sample form version 2=========//
//========Single-page signup form=========//
//========================================//
class FormV2 extends React.Component{
  state = {
    registered:false
  }
  //report data to dataranger
  onClick = () =>{
    console.log('sending data')
    window.collectEvent('click_purchase_button')
    this.setState({
      registered:true
    })
  }
  //display content
  render(){
    const {registered} = this.state
    return(
        <div>
          {!registered?
              <div class="card">
              <form>
                <h3>Basic Information</h3>
                <label>
                  Name:   
                  <input type='text' />
                </label>
                <label>
                  Password:   
                  <input type="password" />
                </label>
                <label>
                  Re-enter Password:   
                  <input type="password" />
                </label>
              </form>
              <Link className="button-home button-small" onClick={this.onClick} >Register</Link>
            </div>
            :<p>Thank you for registering</p>
          }

        </div>
    )
  }
}
export default FormV2;

  