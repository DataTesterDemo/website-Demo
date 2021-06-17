import React from 'react';
import {Link} from 'react-router-dom';
import spinner from '../../assets/spinner.gif'
//=================================================//
//=========setup for split-url experiment==========//
//================no code changes==================//
//===variations done on datatester visual editor===//
//=================================================//
class PromoBannerV1 extends React.Component{
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      hidden: true,
      register: false
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        hidden: false
      })
    }, 5000)
  }
  onClick(){
    //report data to dataranger
    console.log("sending data")
    window.collectEvent('click_promotion_register') //report promotion successful
    this.setState({
      register: true
    })
  }
  render(){
    const {hidden, register} = this.state
    if(hidden){
      return(
        <div className="card">
        <img
          src={spinner}
          style={{ width: '100px', margin: 'auto', marginTop: "50px", marginBottom: '0px', display: 'block' }}
          alt="Loading..."
        />
        <p style={{marginLeft: "20px"}}>Loading...</p>
        </div>
      )

    }else if (!register){
      return(
        <div className="card">
          <h2>Promotional page</h2>
          <p>more attractive graphics</p>
          <p>slower performance loading screen</p>
          <button 
              onClick={()=> this.onClick()}
              className="button-intermediate"
          >Click to register now!</button>
        </div>
      )
    }
    return(
        <div className="card">
          <Link to="/signup" className="button-home">Click here to register</Link>
        </div>
    )
  }
}
export default PromoBannerV1;