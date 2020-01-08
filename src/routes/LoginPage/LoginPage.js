import React, { Component } from 'react'
import './LoginPage.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const { destination } = (location.state || {}).from || '/'
    history.push(destination)
  }

    render() {
      return (
        <>
          <Nav />
          <main role="main">
            <section className='LoginPage'>
              <header role="banner">
                <h2>Login</h2>
              </header>
              <LoginForm
                onLoginSuccess={this.handleLoginSuccess}
              />
            </section>
          </main>
          <Footer />
        </>
      )
    }
}