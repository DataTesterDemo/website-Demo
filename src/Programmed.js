import React from 'react';

//=====================================//
//===demo for programmed experiment====//
//=====================================//
class ProgrammedExperiment extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }
  componentDidMount(){
    //code for programmed experiment; promise used to wait for datatester data
    var programmedExperiment = new Promise((resolve,reject)=>{
      //code from data Tester
      window.collectEvent('getVar', 'showDiscount', true, function(value) {
        if(value){
          resolve(
            <div>
              <p>
                Price: <s>$100</s> $80
              </p>
              <p>
                You save: 20%
              </p>
            </div>
          ) //custom inserted code for showing discount
        }else{
          resolve(
            <div>
              <p>
                Price: $80
              </p>
            </div>
          ) //custom inserted code for showing no discount
        }
      })   
    })
    programmedExperiment.then((value)=> {
      this.setState({
        content: value 
      })
    })
  }
  //display content
  render(){
    return(
      <div>
        {this.state.content}
      </div>
    )
  }
}
export default ProgrammedExperiment;

  