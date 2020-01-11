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
        <nav role="navigation" className="nav">
          <div className="item name">
            <Link
              to='/'
              className="title"
            >
              <h3>Thoughtful</h3>
            </Link>
          </div>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          
        </nav>
      )
  }
}