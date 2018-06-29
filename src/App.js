import React, { Component, Fragment } from 'react';
import auth from './api/auth';
import LoginForm from './components/LoginForm';
import Cars from './components/Cars';


import './App.css';

class App extends Component {

  state = {
    token: null,
    isLoggedIn: false,
    carsData: null,
  
  }

  login = (email, password) => {
    auth.fetchToken(email, password)
      .then(token => {
        localStorage.setItem('token', token)
        return token;
      })
      .then( token => {
        this.setState({
          token,
          isLoggedIn: true
        })
      })
    
  }

  logout = () => {
      this.setState({
        token: null,
        isLoggedIn: false
      })

      localStorage.removeItem('token')
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    if(token) {
      this.setState({
        token,
        isLoggedIn: true
      })
    }
  }


  render() {

    const {isLoggedIn} = this.state;

    return <Fragment>
        {isLoggedIn ?
          <div>
          <button onClick={this.logout}>Logout</button> 
          <Cars token={this.state.token} />
          </div>
            :
          <LoginForm handleSubmit={this.login} />
        }

    </Fragment>
  }
}

export default App;
