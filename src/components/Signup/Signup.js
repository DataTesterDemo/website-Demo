import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import FormV1 from "../Signup/formV1.js"
import FormV2 from "../Signup/formV2.js"

//=================================================//
//=========setup for programmed experiment=========//
//==============code inserted below================//
//=================================================//
class SignUp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
  }
  componentDidMount(){
    //code for programmed experiment; promise used to wait for datatester data
    var programmedExperiment = new Promise((resolve,reject)=>{
      //code from data Tester
      window.collectEvent('getVar', 'showDiscount', true, function(value) {
        if(value){
          //custom inserted code for showing first signup form
          resolve(
            <div>
            <Route exact path="/signup" render={() => (
              <Redirect to="/signup/v1"/>
            )}/>
            </div>
          ) 
        }else{
          //custom inserted code for showing second signup form
          resolve(
            <div>
            <Route exact path="/signup" render={() => (
              <Redirect to="/signup/v2"/>
            )}/>
            </div>
          ) 
        }
      })   
    })
    programmedExperiment.then((value)=> {
      this.setState({
        content: value 
      })
    })
  }
  //display content
  render(){
    return(
      <section className="header-signup">
      <div className="body-signup">
        <h1>Create a New Account</h1>
        <Route path="/signup/v1">
          <FormV1/>
        </Route>
        <Route path="/signup/v2">
          <FormV2/>
        </Route>
        {this.state.content}
      </div>
      </section>
    )
  }
}
export default SignUp;

  