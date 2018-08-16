import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''
    }
  }

  logIn = (event) => {
    event.preventDefault()
    this.setState({
      isLoggedIn: true
    })
  }

  logOut = (event) => {
    event.preventDefault()
    this.setState({
      isLoggedIn: false,
      username: '',
      password: ''
    })
  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>Login Page</h2>
        {!this.state.isLoggedIn ? (
          <div className='LoggedOut'>
            <h4>Sign In</h4>
            <form onSubmit={this.logIn}>
              <input type='text' className="field"
                placeholder='  Enter your Username'
                value={this.state.username}
                onChange={this.usernameChange}
                required
              /> <br /><br />
              <input type='password' className="field"
              placeholder='  Enter Password'
              value={this.state.password}
              onChange={this.passwordChange} 
              required /> <br /><br />
              <input type='submit' value='Login' />
            </form>
          </div>
        ) : (
            <div className="LoggedIn">
              Welcome <strong>{this.state.username}</strong> <a href='#' onClick={this.logOut} >Sign Out</a>
            </div>
          )}
      </div>
    );
  }
}

export default App;