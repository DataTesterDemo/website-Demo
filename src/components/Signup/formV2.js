import React from 'react';
import {Link} from 'react-router-dom';

//========================================//
//==========Sample form version 2=========//
//========Single-page signup form=========//
//========================================//
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
    //resetting form data
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
              <div className="card">
              <form onSubmit={this.handleSubmit}>
                <h3>Basic Information</h3>
                <label>
                  Name:
                  <input 
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    value={name} // Prop: The name input data
                    onChange={this.handleChange} // Prop: Puts data into state
                  />
                </label>
                <label>
                  Email:
                  <input 
                    className="form-control"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email"
                    value={email} // Prop: The email input data
                    onChange={this.handleChange} // Prop: Puts data into state
                    required
                  />
                </label>
                <label>
                  Password
                  <input 
                    className="form-control"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={password} // Prop: The password input data
                    onChange={this.handleChange} // Prop: Puts data into state
                  />
                </label>
                <input
                type='submit'
                className="button-intermediate"
                />
              </form>

            </div>
            :
            <div className="card">
              <p>Thank you for registering</p>
              <Link to="/signup" className="button-home">Register again</Link>
            </div>
          }
        </div>
    )
  }
}
export default FormV2;

  