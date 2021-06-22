import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import "./Signup.css"


//=================================================//
//======Variation 1 for programmed experiment======//
//==============multi-page signup form=============//
//=================================================//
class FormV1 extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      name: '',
      email: '',
      password: '', 
      repassword: '',
      mobile: '',
      registered:false,
      time: 0
    }

    // Bind functions
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }
  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }
  // The "next" and "previous" button functions
  get previousButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <button 
        type="button" 
        className="button-intermediate"
        onClick={this._prev}>
            Previous Step
        </button>
      )
    }
    // ...else return nothing
    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if(currentStep <3){
      return (
        <input 
        type='submit'
        value="Next Step"
        className="button-intermediate"
        />
      )
    }else if (currentStep===3){
      return (
        <input
        type='submit'
        className="button-intermediate"
        />
      )
    }
    // ...else render nothing
    return null;
  }
  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    }) 
  }

  // submit form
  handleSubmit(event){
    event.preventDefault()
    let currentStep = this.state.currentStep;
    if(currentStep !== 3){
      this._next()
    }else{
      const {email, time} = this.state
      const newTime = (Date.now() - time)/1000
      //resetting form data
      event.preventDefault()
      event.target.reset()
      console.log(this.state)
      //sending data to data tester
      console.log('sending data')
      window.collectEvent('click_register_button') //sending data of register click
      window.collectEvent('register_time_taken',{time: newTime}) //sending data of time taken to register in seconds
      window.collectEvent('config', { //sending data of UUID
        user_unique_id: email,
        register_form: 'multi_page'
      })
      this.setState({
        registered:true
      })
    }
  }
  componentDidMount(){
    this.setState({
      time: Date.now()
    })
  }
  render() { 
    const {registered} = this.state
    return (
      <div>
      {!registered?
          <div>  
              <Step1 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                name={this.state.name}
                email={this.state.email}
                next={this.nextButton}
                prev={this.previousButton}
                submit={this.handleSubmit}
              />
              <Step2 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                password={this.state.password}
                next={this.nextButton}
                prev={this.previousButton}
                submit={this.handleSubmit}
              />
              <Step3 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                mobile={this.state.mobile}
                next={this.nextButton}
                prev={this.previousButton}
                submit={this.handleSubmit}
              /> 
          </div>
        :
        <Card className="card-signup">
          <Card.Body>
          <h3>Thank you for registering</h3>
          <br></br>
          <Link to="/signup" className="button-home">
            <Button type="button" variant="outline-dark"> Register again</Button>
          </Link>
          </Card.Body>
        </Card>
        
      }
    </div>
    )
  }
}

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
  }
  return(
    <Card className='card-signup'>
      <Card.Body>
      <form onSubmit={this.props.submit}>
      
      <h3>Basic Information</h3>
      <hr></hr>
      <label for="name"> Name: </label>
      <span>
      <input 
        className="form-control text-input"
        id="name"
        name="name"
        type="text"
        placeholder="Enter name"
        value={this.props.name} // Prop: The email input data
        onChange={this.props.handleChange} // Prop: Puts data into state
      />
      </span>
      <br></br>
      <label for="email"> Email: </label>   
      <span>   
        <input 
          className="form-control text-input"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          width="78"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
          required
        />   
      </span>       
      <br></br>
      {this.props.prev}
      {this.props.next}
      </form>
      </Card.Body>
    </Card>
  )}
}

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
  }
  return(
    <Card className='card-signup'>
      <Card.Body>
      <form onSubmit={this.props.submit}>
      
      <h3>Password Setting</h3>
      <hr></hr>
      <label for="password"> Password: </label>
      <span>
      <input 
        className="form-control text-input"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={this.props.password} // Prop: The password input data
        onChange={this.props.handleChange} // Prop: Puts data into state
      />
      </span>
      <br></br>
      <label for="repassword"> Reenter Password </label>   
      <span>   
        <input 
          className="form-control text-input"
          id="repassword"
          name="repassword"
          type="password"
          placeholder="Password"
          value={this.props.repassword} // Prop: The password input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />   
      </span>       
      <br></br>
      {this.props.prev}
      {this.props.next}
      </form>
      </Card.Body>
    </Card>
  )}
}

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep < 3) { // Prop: The current step
      return null
    } else if (this.props.currentStep > 3){
      return(
        <div>Thanks</div>
      )
    }
  return(
    <Card className='card-signup'>
      <Card.Body>
      <form onSubmit={this.props.submit}>
      
      <h3>Link with Mobile</h3>
      <hr></hr>
      <label for="mobile"> Mobile: </label>
      <span>
      <input 
        className="form-control text-input"
        id="mobile"
        name="mobile"
        type="text"
        placeholder="Enter mobile number"
        value={this.props.mobile} // Prop: The mobile input data
        onChange={this.props.handleChange} // Prop: Puts data into state
      />
      </span>
      <br></br>
      {this.props.prev}
      {this.props.next}
      </form>
      </Card.Body>
    </Card>
  )}
}

export default FormV1;