import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import SignUp from './components/Signup/Signup.js'
import Products from './components/Products/Products.js'

//=====================================//
//=============Home Page===============//
//=====================================//
class Home extends React.Component{
  render(){
    return(
      <div>
        <h1>Demo Website</h1>
        <nav>
          <ul>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

//=====================================//
//==========display content============//
//=====================================//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" render={() => (
                  <Redirect to="/home"/>
                )}/>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/signup" >
                  <SignUp />
                  <p></p>
                  <Link to="/" className="button-home">Back to home page</Link>
                </Route>
                <Route path="/products">
                  <Products />
                  <p></p>
                  <Link to="/" className="button-home">Back to home page</Link>
                </Route>
              </Switch>
            </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;

  