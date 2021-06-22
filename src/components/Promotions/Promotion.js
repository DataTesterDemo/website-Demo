import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import {ButtonGroup, Button, Collapse} from 'react-bootstrap';
import PromoBannerV1 from "./PromoBannerV1.js"
import PromoBannerV2 from "./PromoBannerV2.js"
import "./Promotions.css"

//=================================================//
//=========setup for spliturl experiment=--========//
//============no code change required==============//
//=================================================//
class Promotion extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      promotion: false
    })
    this.onClick = this.onClick.bind(this)
  }
  onClick(){
    this.setState({
      promotion: true,
      open1: false,
      setOpen1: false,
      open2: false,
      setOpen2: false
    })
  }
  //display content
  render(){
    return(
        <Switch>
          <Route path="/promotion/v1" >
            <div className="body">
              <PromoBannerV1 />
            </div>
          </Route>
          <Route path="/promotion/v2" >
            <div className="body">
              <PromoBannerV2 />
            </div>
          </Route>
          <Route path="/promotion/">
          <section className="header-promo">
            <div className="container">
              <h1>Super Deals</h1>
              <h4>Check out our hottest deals for the month</h4>
              <Link className="link" to="/promotion/v1">
                <Button variant="outline-light" size="lg">
                  Promotion 1
                </Button>
              </Link>
              <Link className="link"to="/promotion/v2">
                <Button variant="outline-light" size="lg">
                  Promotion 2
                </Button>
              </Link>
            </div>
          </section>
          </Route>
        </Switch>
    )
  }
}
export default Promotion;

  