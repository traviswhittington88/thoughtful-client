import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
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
          </nav>
        )
    }
}