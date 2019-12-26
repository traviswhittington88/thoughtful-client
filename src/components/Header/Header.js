import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import TokenService from '../../services/token-service'

export default class Header extends Component {
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
        <br/>
        <Link
          to='/login'>
          Login
        </Link>
      </div>
    )
  }

  render() {
      return (
        <nav className='Header'>
          <h1 className='Thoughtful__heading'>
            <Link
              to='/'>
              Thoughtful
            </Link>
          </h1>
          <h2 className='Thoughful__subheading'>
            A safe place for the mind
          </h2>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      )
  }
}