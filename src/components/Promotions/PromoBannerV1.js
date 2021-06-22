import React from 'react';
import {Link} from 'react-router-dom';
import spinner from '../../assets/spinner.gif'
import {Card, Button, Modal} from 'react-bootstrap';
import promo1 from "../../assets/promo1.jpg"
import "./Promotions.css"
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
        <Card className="card-wide-promo">
        <Card.Img variant="top" src={promo1} />
        <Card.ImgOverlay>
          <Card.Title className="promotion-title">New Promotion 1</Card.Title>
          <Card.Text className="promotion-body">
            Early Bird Sign-Up
          </Card.Text>
          <Card.Text className="promotion-content">
            Save $50 when you sign up now!
          </Card.Text>
          <Link className="link"to="/signup">
            <Button
              variant="outline-dark"
              onClick={()=> this.onClick()}
              className="button-intermediate"
            >
              Register Now!
            </Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
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