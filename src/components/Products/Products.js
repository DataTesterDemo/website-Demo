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
  componentDidMount(){
    window.dataLayer.push({
      'ecommerce': {
        'impressions': [
         {
           'id': 'product 1',       // Name or ID is required.
           'price': '350',
         },
         {
          'id': 'product 2',       // Name or ID is required.
          'price': '160',
        },
        {
          'id': 'product 3',       // Name or ID is required.
          'price': '80',
        },
        {
          'id': 'product 4',       // Name or ID is required.
          'price': '450',
        },
        {
          'id': 'product 5',       // Name or ID is required.
          'price': '60',
        },
        {
          'id': 'product 6',       // Name or ID is required.
          'price': '800',
        },
        {
          'id': 'product 7',       // Name or ID is required.
          'price': '4250',
        },
        {
          'id': 'product 8',       // Name or ID is required.
          'price': '800',
        },
        {
          'id': 'product 9',       // Name or ID is required.
          'price': '20',
        }]
      }
    });
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
    window.dataLayer.push({
      'event': 'productClick',
      'ecommerce': {
        'purchase': {
          'actionField': {
            'id': product,                         // Transaction ID. Required for purchases and refunds.
            'affiliation': 'Online Store',
            'revenue': price,                     // Total transaction value (incl. tax and shipping)
            'tax':'0',
            'shipping': '0',
            'coupon': 'SUMMER_SALE'
          },
          'products': [{                            // List of productFieldObjects.
            'name': product,     // Name or ID is required.
            'id': '12345',
            'price': price,
            'quantity': 1,                           // Optional fields may be omitted or set to empty string.
           }]
        }
      }
    });
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
              <Card className="card-normal" data-product-id="product 1">
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
              <Card className="card-normal" data-product-id="product 2">
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
              <Card className="card-normal" data-product-id="product 3"> 
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
          <div className="row hidden-md-up">
            <div className="col-md-4">
              <Card className="card-normal" data-product-id="product 4">
                <Card.Img  variant="top" src={product3} />
                <Card.Body>
                  <Card.Title>Product 4</Card.Title>
                  <Card.Text className="money">
                    $450
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 4","$450")}
                  variant="outline-dark"
                  >Purchase</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card-normal" data-product-id="product 5">
                <Card.Img variant="top" src={product2} />
                <Card.Body>
                  <Card.Title>Product 5</Card.Title>
                  <Card.Text className="money">
                    $60
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 5","$60")}
                  variant="outline-dark"
                  >Purchase</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card-normal" data-product-id="product 6"> 
                <Card.Img variant="top" src={product1} />
                <Card.Body>
                  <Card.Title>Product 6</Card.Title>
                  <Card.Text className="money">
                    $800
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 6","$800")}
                  variant="outline-dark"
                  >Purchase</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row hidden-md-up">
            <div className="col-md-4">
              <Card className="card-normal" data-product-id="product 7">
                <Card.Img  variant="top" src={product1} />
                <Card.Body>
                  <Card.Title>Product 7</Card.Title>
                  <Card.Text className="money">
                    $4250
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 7","$4250")}
                  variant="outline-dark"
                  >Purchase</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card-normal" data-product-id="product 8">
                <Card.Img variant="top" src={product2} />
                <Card.Body>
                  <Card.Title>Product 8</Card.Title>
                  <Card.Text className="money">
                    $600
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 8","$600")}
                  variant="outline-dark"
                  >Purchase</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card-normal" data-product-id="product 9"> 
                <Card.Img variant="top" src={product3} />
                <Card.Body>
                  <Card.Title>Product 9</Card.Title>
                  <Card.Text className="money">
                    $20
                  </Card.Text>
                  <Button 
                  onClick={()=> this.onClick("Product 9","$20")}
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