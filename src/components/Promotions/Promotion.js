import React from 'react';
import { Route, Link} from 'react-router-dom';
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
    this.onClick = this.onClick.bind(this)
  }
  onClick(){
    this.setState({
      promotion: true
    })
  }
  //display content
  render(){
    const {promotion} = this.state
    if(!promotion){
      return(
        <div>
          <h1>Promotion variations</h1>
          <nav>
            <ul>
              <li><Link to="/promotion/v1" onClick={this.onClick}>Promotion V1</Link></li>
              <li><Link to="/promotion/v2" onClick={this.onClick}>Promotion V2</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
    return(
      <div>
        <Route path="/promotion/v1">
          <PromoBannerV1/>
        </Route>
        <Route path="/promotion/v2">
          <PromoBannerV2/>
        </Route>
      </div>
    )
  }
}
export default Promotion;

  