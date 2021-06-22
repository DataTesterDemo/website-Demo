import './NavBar.css';
import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//=====================================//
//=============NavBar==================//
//=====================================//
class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      show: false
    }
    this.showDropdown = this.showDropdown.bind(this)
    this.hideDropdown = this.hideDropdown.bind(this)

  }
  
  setTheme(value){
    if(value==="dark"){
      return "shadow-sm bg-dark"
    }else{
      return "shadow-sm"
    }
  }
  showDropdown(e){
    this.setState({
      show: true
    })
  }
  hideDropdown(e){
    this.setState({
      show: false
    })
  }

  render(){
    return(
      <div className={this.setTheme(this.props.bg)} >
      <Navbar collapseOnSelect expand="lg" bg={this.props.bg} variant={this.props.bg} className="body">
        <Navbar.Brand href="/home">Demo Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/promotion">Promotions</Nav.Link>
            <NavDropdown 
            title="Account" 
            id="collasible-nav-dropdown"
            show={this.state.show}
            onMouseEnter={this.showDropdown} 
            onMouseLeave={this.hideDropdown}
            >
              <NavDropdown.Item disabled>Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup">SignUp</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>

    )
  }
}


export default NavBar;

  