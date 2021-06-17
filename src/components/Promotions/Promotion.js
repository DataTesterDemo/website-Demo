import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import PromoBannerV1 from "./PromoBannerV1.js"
import PromoBannerV2 from "./PromoBannerV2.js"

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
    console.log(this.state)
    this.onClick = this.onClick.bind(this)
  }
  onClick(){
    console.log("te")
    this.setState({
      promotion: true
    })
  }
  //display content
  render(){
    return(
      <div>
        <Switch>
          <Route path="/promotion/v1" >
            <PromoBannerV1 />
          </Route>
          <Route path="/promotion/v2" >
            <PromoBannerV2 />
          </Route>
          <Route path="/promotion/">
            <div className="card">
              <h1>Promotion variations</h1>
              <nav>
                <ul>
                  <li><Link to="/promotion/v1" onClick={this.onClick}>Promotion V1</Link></li>
                  <li><Link to="/promotion/v2" onClick={this.onClick}>Promotion V2</Link></li>
                </ul>
              </nav>
            </div>
          </Route>
        </Switch>
      </div>
    )
  }
}
export default Promotion;

  