import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';


//========================================//
//==========Sample form version 1=========//
//=========Multi-page signup form=========//
//========================================//
class FormV1 extends React.Component{
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
      <BrowserRouter>
      <Switch>
        <Route exact path="/signup" render={() => (
          <Redirect to="/signup/1"/>
        )}/>
        <Route path="/signup/1">
        <div class="card">
          <form>
            <h3>Basic Information</h3>
            <label>
              Name:   
              <input type='text' />
            </label>
            <label>
              Email:   
              <input type='text' />
            </label>
          </form>
          <Link to="/signup/2" className="button-home button-small">next step</Link>
        </div>
        </Route>
        <Route path="/signup/2" >
        <div class="card">
          <form>
            <h3>Password Setting</h3>
            <label>
              Password:   
              <input type="password" />
            </label>
            <label>
              Re-enter Password:   
              <input type="password" />
            </label>
          </form>
          <Link to="/signup/3" className="button-home button-small">next step</Link>
        </div>
        </Route>
        <Route path="/signup/3">
        <div>
          {!registered?
            <div class='card'>
              <form>
                <h3>Link with Mobile</h3>
                <label>
                  Mobile Number:   
                  <input type="tel" placeholder="1234-5678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </label>
                <label>
                  Enter OTP:   
                  <input type="password" />
                </label>
              </form>
              <Link className="button-home button-small" onClick={this.onClick} >Register</Link>
            </div>
            :<p>Thank you for registering</p>
          }

        </div>
        </Route>
      </Switch>
    </BrowserRouter>
    )
  }
}
export default FormV1;

  