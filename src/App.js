import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/Signup/Signup.js'
import Products from './components/Products/Products.js'
import Promotions from './components/Promotions/Promotion';
import NavBar from "./components/NavBar/NavBar.js"

//=====================================//
//=============Home Page===============//
//=====================================//
class Home extends React.Component{
  render(){
    return(
      <section className="header">
        <div className="container">
          <h1 className="home">Demo Website</h1>
          <h4>This is a demo Ecommerce website</h4>
          <Link className="link" to="/promotion">
            <Button variant="outline-light" size="lg">
              Hot Deals
            </Button>
          </Link>
          <Link className="link"to="/products">
            <Button variant="outline-light" size="lg">
              Shop Now
            </Button>
          </Link>
          <Link className="link" to="/signup">
            <Button variant="outline-light" size="lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </section>
    )
  }
}

//=====================================//
//==========display content============//
//=====================================//
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/home"/>
          )}/>
          <Route path="/home">
            <NavBar bg="light"/>
            <Home />
          </Route>
          <Route path="/signup" >
            <NavBar bg="dark"/>
            <SignUp />
            <div className='divider'></div>
          </Route>
          <Route path="/products">
            <NavBar bg="dark"/>
            <Products />
            <div className='divider'></div>
          </Route>
          <Route path="/promotion">
            <NavBar bg="light"/>
            <Promotions />
            <div className='divider'></div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

  