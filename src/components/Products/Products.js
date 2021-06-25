import React from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Products.css';
import promo1 from "../../assets/promo1.jpg"
import promo2 from "../../assets/promo2.jpg"
import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpg"
import product3 from "../../assets/product3.jpg"

//=================================================//
//============setup for visual experiment==========//
//================no code changes==================//
//===variations done on datatester visual editor===//
//=================================================//
class Products extends React.Component{
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      purchased:false,
      product: ""
    }
    this.onClick = this.onClick.bind(this)
    this.continueShopping = this.continueShopping.bind(this)
  }
  onClick(product,price){
    const product_ = product
    const price_ = price
    //report data to dataranger
    console.log("sending data")
    window.collectEvent('click_purchase_button') //report purchase of product
    window.collectEvent('product_purchased',{    //report details of product purchased
      product_name: product_,
      price: price_ 
    })
    this.setState({
      purchased:true,
      product: product
    })
  }
  continueShopping(){
    //report data to dataranger
    console.log("sending data")
    window.collectEvent('click_continue_shopping')
    this.setState({
      purchased:false,
      product: ""
    })
  }
  render(){
      return(
        <div className="page body">
          <Modal show={this.state.purchased} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
              <Modal.Title>Purchase Completed</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thank you for purchasing {this.state.product}</Modal.Body>
            <Modal.Footer>
              <Button variant="outline-dark" onClick={this.continueShopping}>
                Continue Shopping
              </Button>
              <Link to="/">
                <Button variant="outline-dark">
                  Back to Home page
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <div className="row">
          <div className="col-md-6">
            <div className="col-md-12">
              <Card className="card-flat">
                  <Card.Img variant="top" src={promo2} />
                  <Card.ImgOverlay>
                    <Card.Title className="promo_title_white">Exclusive Membership</Card.Title>
                    <Card.Text className="promo_body_white">
                      New Promotion 2
                    </Card.Text>
                    <Link className="link"to="/promotion/v2">
                      <Button variant="outline-light" className="button-intermediate">
                        More Details
                      </Button>
                    </Link>
                  </Card.ImgOverlay>
                </Card>
            </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                <Card className="card-wide">
                  <Card.Img variant="top" src={promo1} />
                  <Card.ImgOverlay>
                    <Card.Title className="promo_title">Early Bird Sale</Card.Title>
                    <Card.Text className="promo_body">
                      New Promotion 1
                    </Card.Text>
                    <Link className="link"to="/promotion/v1">
                      <Button variant="outline-dark" className="button-intermediate">
                        Find out more
                      </Button>
                    </Link>
                  </Card.ImgOverlay>
                </Card>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <h1 className="product-h1">Exclusive Products</h1>
          <hr></hr>
          <div className="row hidden-md-up">
            <div className="col-md-4">
              <Card className="card-normal">
                <Card.Img  variant="top" src={product2} />
                <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <Card.Text className="money">
                    $350
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 1","$350")}
                  variant="outline-dark"
                  >Purchase</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card-normal">
                <Card.Img variant="top" src={product1} />
                <Card.Body>
                  <Card.Title>Product 2</Card.Title>
                  <Card.Text className="money">
                    $160
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 2","$160")}
                  variant="outline-dark"
                  >Purchase</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card-normal"> 
                <Card.Img variant="top" src={product3} />
                <Card.Body>
                  <Card.Title>Product 3</Card.Title>
                  <Card.Text className="money">
                    $80
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 3","$80")}
                  variant="outline-dark"
                  >Purchase</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      )
  }
}
export default Products;