import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
import "./Signup.css"

//=================================================//
//======Variation 1 for programmed experiment======//
//==============single-page signup form============//
//=================================================//
class FormV2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      registered: false,
      time: 0,
      name: "",
      email: "",
      password: ""
    }
    //bind functions
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    }) 
  }
  //submit form data
  handleSubmit(event){
    const {email, time} = this.state
    const newTime = (Date.now() - time)/1000
    event.preventDefault()
    event.target.reset()
    //sending data to data tester
    console.log('sending data')
    window.collectEvent('click_register_button') //sending data of register click
    window.collectEvent('register_time_taken',{time: newTime}) //sending data of time taken to register in seconds
    window.collectEvent('config', { 
      user_unique_id: email, //sending data of UUID
      register_form: 'single_page' //sending data of register form
    })
    //setting render
    this.setState({
      registered:true
    })
  }
  componentDidMount(){
    this.setState({
      time: Date.now()
    })
  }
  //display content
  render(){
    const {registered, name, email, password} = this.state
    return(
        <div>
          {!registered?
            <Card className='card-signup'>
              <Card.Body>
              <form onSubmit={this.handleSubmit}>
              
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
                value={name} // Prop: The name input data
                onChange={this.handleChange} // Prop: Puts data into state
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
                  value={email} // Prop: The email input data
                  onChange={this.handleChange} // Prop: Puts data into state
                  required
                />   
              </span>       
              <br></br>
              <label for="password"> Password: </label>
              <span>
              <input 
                className="form-control text-input"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={password} // Prop: The password input data
                onChange={this.handleChange} // Prop: Puts data into state
              />
              </span>
              <br></br>
              <input
              type='submit'
              className="button-intermediate"
              />
              </form>
              </Card.Body>
            </Card>

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
export default FormV2;

  