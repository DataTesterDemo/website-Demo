import React from 'react';
import FormV1 from '../Signup/formV1.js'
import FormV2 from '../Signup/formV2.js'

//=================================================//
//=========setup for programmed experiment=========//
//==============code inserted below================//
//=================================================//
class SignUp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      content: null,
      clicked:false
    };
  }
  componentDidMount(){
    //code for programmed experiment; promise used to wait for datatester data
    var programmedExperiment = new Promise((resolve,reject)=>{
      //code from data Tester
      window.collectEvent('getVar', 'showDiscount', true, function(value) {
        console.log(value)
        if(value){
          resolve(
            <FormV1 />
          ) //custom inserted code for showing first signup form
        }else{
          resolve(
            <FormV2 />
          ) //custom inserted code for showing second signup form
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
      <div>
        {this.state.content}
      </div>
    )
  }
}
export default SignUp;

  