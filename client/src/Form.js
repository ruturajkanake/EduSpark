import React, { Component } from 'react';
import axios from 'axios'
import "./Form.css";


class Form extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      profileType: '',
    };
  }   
  handleChange =({ target }) =>{
    const {name, value} = target
    this.setState({[name]: value});
  }

  submit =(event) => {
    // prevent refreshing page
    event.preventDefault();

    // assign values
    const payload = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      profileType: this.state.profileType
    }

    axios({
      url: '/profiles',
      method: 'POST',
      data: payload
    }).then((res)=>{
      console.log('Data has been send to server')
      localStorage.setItem('authToken', res.data)
      this.props.history.push('/')
      this.resetUserInputs()
    }).catch(()=> {
      console.log('Internal server error')
    })

  }

  // For resetting the user inputs from the form
  resetUserInputs = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      profileType: ''
    })
  }

  render(){
    return(
      <form className="Form" onSubmit={this.submit}>
        <div className="Form-Set">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            placeholder="Enter Name"
            value={this.state.name}
            name="name" 
            id="name"
            onChange={this.handleChange}/>
        </div>
        <div className="Form-Set">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            placeholder="Enter Email" 
            id="email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className="Form-Set">
          <label htmlFor="pass1">Password</label>
          <input 
            type="password" 
            placeholder="Enter Password"
            value={this.state.password}
            name="password"
            id="pass1"
            onChange={this.handleChange}/>
        </div>
         <div className="Form-Set">
          <label htmlFor="pass2">Confirm Password</label>
          <input 
            type="password" 
            placeholder="Re-enter Password"
            id="pass2"
            value="asdsadsadsad"
            name="confirmPass"
            onChange={this.handleChange}
            />
        </div> 
        <div className="Form-Set">
          <p> Sign In As </p>
          <input type="radio" name="profileType" value="instructor"  checked={this.state.profileType === "instructor"} onChange={ this.handleChange }/> Instructor 
          <input type="radio" name="profileType" value="student"  checked={this.state.profileType === "student"} onChange={ this.handleChange }/> Student
        </div>
        <input className = "btn" type="submit" value="Register"/>
      </form>   
    );
  }
}

export default Form;