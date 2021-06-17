import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import SignUp from './components/Signup/Signup.js'
import Products from './components/Products/Products.js'
import Promotions from './components/Promotions/Promotion';

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
            <li><Link to="/promotion">promotions</Link></li>
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
                  <div className='divider'></div>
                  <Link to="/" className="button-home button-demo">Back to Demo website</Link>
                </Route>
                <Route path="/products">
                  <Products />
                  <div className='divider'></div>
                  <Link to="/" className="button-home button-demo">Back to Demo website</Link>
                </Route>
                <Route path="/promotion">
                  <Promotions />
                  <div className='divider'></div>
                  <Link to="/" className="button-home button-demo">Back to Demo website</Link>
                </Route>
              </Switch>
            </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;

  