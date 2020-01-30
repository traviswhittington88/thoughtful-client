import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Nav.css'
import logo from '../../images/logo_black.png'


export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
        <div className='item logout'>
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
      <>
        <div className='item signup'>
          <Link
            to='/signup'>
            Sign up
          </Link>
        </div>
        <div className='item login'>
          <Link
            to='/login'>
            Login
          </Link>
        </div>
      </>
    )
  }

  render() {
      return (
        <nav role="navigation" className="nav bg-light">
          <div className="item name">
            <Link
              to='/homepage'
              className="title"
            >
              <img src={logo}></img>
            </Link> 
          </div>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      )
  }
}