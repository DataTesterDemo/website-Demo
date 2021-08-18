import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import spinner from '../../assets/spinner.gif'
import promo2 from "../../assets/promo2.jpg"
//=================================================//
//=========setup for split-url experiment==========//
//================no code changes==================//
//===variations done on datatester visual editor===//
//=================================================//
class PromoBannerV2 extends React.Component{
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
    }, 300)
    window.dataLayer.push({
      'event': 'promoview',
      'ecommerce': {
        'promoView': {
          'promotions': [                     // Array of promoFieldObjects.
           {                                // ID or Name is required.
             'name': 'Promotion 2',
             'creative': 'banner2',
             'position': 'slot2'
           }]
        }
      }
    });
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
        <Card className="card-wide-promo" id = "promoImpression">
          <Card.Img variant="top" src={promo2} />
          <Card.ImgOverlay>
            <Card.Title className="promotion-title-white">New Promotion 2</Card.Title>
            <Card.Text className="promotion-body-white">
              Exclusive Membership
            </Card.Text>
            <Card.Text className="promotion-content-white">
              Save 10% of purchases when you sign up now!
            </Card.Text>
            <Link className="link"to="/signup">
              <Button
              variant="outline-light"
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
export default PromoBannerV2;