import React from 'react';

//=================================================//
//============setup for visual experiment==========//
//================no code changes==================//
//===variations done on datatester visual editor===//
//=================================================//
class Products extends React.Component{
  state = {
    purchased:false
  }
  onClick = () =>{
    //report data to dataranger
    window.collectEvent('click_purchase_button')
    this.setState({
      purchased:true
    })
  }
  render(){
    const {purchased} = this.state
    return(
      <div>
        <div>
          <h3>Product 1</h3>
          <p>Price: $80</p>
        </div>
        <div>
          {!purchased?
            <button onClick={this.onClick}>Purchase</button>
            :<p>Thank you for purchasing</p>
          }
        </div>
      </div>
    )
  }
}
export default Products;