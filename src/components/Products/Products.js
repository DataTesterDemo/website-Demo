import React from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Products.css';
import promo1 from "../../assets/promo1.jpg"
import promo2 from "../../assets/promo2.jpg"
import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpg"
import product3 from "../../assets/product3.jpg"
import product_list from "./product_list"

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
      product: "",
      products: product_list
    }
    this.onClick = this.onClick.bind(this)
    this.continueShopping = this.continueShopping.bind(this)
    this.renderProductRow = this.renderProductRow.bind(this)
    this.renderProducts = this.renderProducts.bind(this)
  }
  componentDidMount(){
    const products_ = this.state.products.flat()
    //gtm implementations for product impressions
    // window.dataLayer.push({
    //   'ecommerce': {
    //     'impressions': products_
    //   }
    // });

    //dataranger implementation for product impressions
    window.addEventListener('scroll', function() {
      products_.forEach(function(item, index, object){
        const element = document.getElementById(item['id'])
        var position = element.getBoundingClientRect();
        // checking whether fully visible
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
          object.splice(index, 1);
          //report view data to dataranger
          if (item['id'] != null){
            console.log("sending data to DataRangers")
            console.log(item['id'] + "  $" + item['price'] + " viewed")
            window.collectEvent("product summary impression view",{
              product_name: item['id'],
              price: item["price"]
            })
          } 
        }
      }) 
    });
  }

  onClick(product,price){
    const product_ = product
    const price_ = price
    //report data to dataranger
    console.log("sending data to DataRangers")
    console.log(product_ + "  $" + price_ + " purchased")
    window.collectEvent('click_purchase_button') //report purchase of product
    window.collectEvent('product_purchased',{    //report details of product purchased
      product_name: product_,
      price: price_ 
    })

    //gtm implementations
    console.log("sending data to GTM")
    console.log(product_ + "  $" + price_ + " purchased")
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
    console.log("sending data to DataRangers")
    console.log("Continue Shopping button pressed")
    window.collectEvent('click_continue_shopping')
    this.setState({
      purchased:false,
      product: ""
    })
  }
  renderProducts(){
    return this.state.products.map(i => this.renderProductRow(i))
  }
  renderProductRow(products){
    return(
      <div className="row hidden-md-up">
      <div className="col-md-4">
        <Card className="card-normal" data-product-id = {products[0]['id']} id = {products[0]['id']}>
          <Card.Img  variant="top" src={product2} />
          <Card.Body>
            <Card.Title>{products[0]['id']}</Card.Title>
            <Card.Text className="money">
            {products[0]['price']}
            </Card.Text>
            <Button 
            onClick={()=> this.onClick(products[0]['id'],products[0]['price'])}
            variant="outline-dark"
            >Purchase</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card className="card-normal" data-product-id={products[1]['id']} id = {products[1]['id']}>
          <Card.Img variant="top" src={product1} />
          <Card.Body>
            <Card.Title>{products[1]['id']}</Card.Title>
            <Card.Text className="money">
            {products[1]['price']}
            </Card.Text>
            <Button 
            onClick={()=> this.onClick(products[1]['id'],products[1]['price'])}
            variant="outline-dark"
            >Purchase</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card className="card-normal" data-product-id={products[2]['id']} id = {products[2]['id']}> 
          <Card.Img variant="top" src={product3} />
          <Card.Body>
            <Card.Title>{products[2]['id']}</Card.Title>
            <Card.Text className="money">
            {products[2]['price']}
            </Card.Text>
            <Button 
            onClick={()=> this.onClick(products[2]['id'],products[2]['price'])}
            variant="outline-dark"
            >Purchase</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    )
  }
  render(){
    //const renderedProducts = this.renderProducts()
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
          {this.renderProducts()}
          <div>
            <br></br>
            <br></br>
          </div>
        </div>
      )
  }
}
export default Products;