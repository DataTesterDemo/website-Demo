import React from 'react';
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
    const {purchased} = this.state
    if(!purchased){
      return(
        <div>
          <h2>Shop for Products</h2>
          <div className="rows">
            <div className="row">
              <h3>Product 1</h3>
              <p>Price: $80</p>
              <button 
              onClick={()=> this.onClick("Product 1","$80")}
              className="button-intermediate"
              >Purchase</button>
            </div>
            <div className="row">
              <h3>Product 2</h3>
              <p>Price: $70</p>
              <button 
              onClick={()=> this.onClick("Product 2","70")}
              className="button-intermediate"
              >Purchase</button>
            </div>
            <div className="row">
              <h3>Product 3</h3>
              <p>Price: $90</p>
              <button 
              onClick={()=> this.onClick("Product 3","$90")}
              className="button-intermediate"
              >Purchase</button>
            </div>
            <div className="row">
              <h3>Product 4</h3>
              <p>Price: $100</p>
              <button 
              onClick={()=> this.onClick("Product 4","$100")}
              className="button-intermediate"
              >Purchase</button>
            </div>
          </div>
        </div>
      )
    }
    return(
        <div className="card">
          <p>You have purchased product: {this.state.product}</p>
          <button 
          onClick={this.continueShopping}
          className="button-intermediate"
          >Continue Shopping</button>
        </div>
    )
  }
}
export default Products;