import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Nav.css'


export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/signup'>
          Sign up
        </Link>
        <Link
          to='/login'>
          Login
        </Link>
      </div>
    )
  }

  render() {
      return (
        <nav role="navigation" className="nav">
          <div className="links">
          <Link
            to='/'
            className="title"
          >
            <h3>Thoughtful</h3>
          </Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          </div>
        </nav>
      )
  }
}